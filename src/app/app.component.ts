import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ 加入 FormsModule
import { CommonModule } from '@angular/common'; // ✅ 加入 CommonModule

interface CustomMediaTrackConstraintSet extends MediaTrackConstraintSet {
  zoom?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // ✅ 確保有 CommonModule
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
    // ✅ 延遲啟動相機，確保 DOM 加載完成
    setTimeout(() => {
      console.log("📷 Video element:", this.videoElement);
      if (!this.videoElement) {
        console.error("❌ `videoElement` 未找到，請確保 HTML 正確！");
        return;
      }
      this.startCamera();
    }, 100);
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

      // ✅ 開啟相機
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' } // 後鏡頭
      });

      const video = this.videoElement.nativeElement as HTMLVideoElement;
      video.srcObject = this.stream;
      video.play();

      // ✅ 檢查裝置是否支援變焦
      const track = this.stream.getVideoTracks()[0];
      const capabilities = track.getCapabilities() as any; 
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
      track.applyConstraints({
        advanced: [{ zoom: zoomValue }]
      }).then(() => console.log(`🔍 Zoom set to ${zoomValue}`))
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
