import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CustomMediaTrackConstraintSet extends MediaTrackConstraintSet {
  zoom?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;
  stream: MediaStream | null = null;
  zoomLevel = 1;
  maxZoom = 3;
  minZoom = 1;
  zoomStep = 0.1;

  ngAfterViewInit() {
    setTimeout(() => {
      console.log("📷 Video element:", this.videoElement);
      if (!this.videoElement) {
        console.error("❌ `videoElement` 未找到，請確保 HTML 正確！");
        return;
      }
      this.startCamera();
    }, 500);
  }

  async startCamera() {
    try {
      if (!this.videoElement || !this.videoElement.nativeElement) {
        console.error('❌ `videoElement` 為 null，請檢查 HTML 是否正確！');
        alert('⚠️ 請確保網站在 HTTPS 下運行，並允許相機權限！');
        return;
      }

      // ✅ 確保使用 HTTPS，否則提醒用戶
      if (location.protocol !== 'https:') {
        alert("⚠️ 請使用 HTTPS 以啟動相機功能！");
        return;
      }

      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' } // 使用後鏡頭
      });

      const video: HTMLVideoElement = this.videoElement.nativeElement;
      video.srcObject = this.stream;
      video.play();

      // ✅ 確認裝置是否支援變焦
      const track = this.stream.getVideoTracks()[0];
      const capabilities = track.getCapabilities() as any; // 讓 TypeScript 忽略類型檢查
      console.log("📷 Camera capabilities:", capabilities);

      if (capabilities.zoom) {
        this.zoomLevel = capabilities.zoom.min || 1;
        this.minZoom = capabilities.zoom.min || 1;
        this.maxZoom = capabilities.zoom.max || 3;
      } else {
        console.warn('❌ Zoom is not supported on this device.');
      }
    } catch (err) {
      console.error('⚠️ 無法存取相機:', err);
      alert('❌ 請允許相機權限，或使用支援相機的瀏覽器！');
    }
  }

  adjustZoom(zoomValue: number) {
    if (this.stream) {
      const track = this.stream.getVideoTracks()[0];
      track
        .applyConstraints({
          advanced: [{ zoom: zoomValue }] as CustomMediaTrackConstraintSet[],
        })
        .then(() => console.log(`🔍 Zoom set to ${zoomValue}`))
        .catch((err) => console.error('❌ Zoom adjustment failed', err));
    }
  }

  increaseZoom() {
    if (this.zoomLevel < this.maxZoom) {
      this.zoomLevel = Math.min(this.zoomLevel + this.zoomStep, this.maxZoom);
      this.adjustZoom(this.zoomLevel);
    }
  }

  decreaseZoom() {
    if (this.zoomLevel > this.minZoom) {
      this.zoomLevel = Math.max(this.zoomLevel - this.zoomStep, this.minZoom);
      this.adjustZoom(this.zoomLevel);
    }
  }
}
