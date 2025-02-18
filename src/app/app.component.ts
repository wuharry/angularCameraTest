import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { FormsModule } from '@angular/forms'; // ✅ 加入 FormsModule
  import { CommonModule } from '@angular/common'; // ✅ 加入 CommonModule

  interface CustomMediaTrackConstraintSet extends MediaTrackConstraintSet {
    zoom?: number;
  }

  @Component({
    selector: 'app-root',
    standalone: true, // ✅ 必須是 Standalone Component
    imports: [RouterOutlet, FormsModule, CommonModule], // ✅ 確保有 CommonModule
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
  })
  export class AppComponent implements AfterViewInit {
    @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;
    stream: MediaStream | null = null;
    zoomLevel = 1; // 初始變焦倍率
    maxZoom = 3; // 最大變焦倍率
    minZoom = 1; // 最小變焦倍率
    zoomStep = 0.1; // 變焦調整的步長
    ngAfterViewInit() {
      console.log("Video element:", this.videoElement);
      this.startCamera();
    }

    async startCamera() {
      try {
        if (!this.videoElement || !this.videoElement.nativeElement) {
          console.error('Video element not found!');
          return;
        }
        this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video: HTMLVideoElement = this.videoElement.nativeElement;
        video.srcObject = this.stream;
        video.play();

        
        // 嘗試獲取變焦能力      // 檢查裝置是否支持變焦

        const track = this.stream.getVideoTracks()[0];
        const capabilities = track.getCapabilities() as any; // 讓 TypeScript 忽略類型檢查
        console.log("Camera capabilities:", capabilities);

        if (capabilities.zoom) {
          this.zoomLevel = capabilities.zoom.min || 1;
          this.minZoom = capabilities.zoom.min || 1;
          this.maxZoom = capabilities.zoom.max || 3;
        } else {
          console.warn('Zoom is not supported on this device.');
        }
      } catch (err) {
        console.error('Error accessing camera', err);
      }
    }

    adjustZoom(zoomValue: number) {
      if (this.stream) {
        const track = this.stream.getVideoTracks()[0];
        track
          .applyConstraints({
            advanced: [{ zoom: zoomValue }] as CustomMediaTrackConstraintSet[],
          })
          .then(() => console.log(`Zoom set to ${zoomValue}`))
          .catch((err) => console.error('Zoom adjustment failed', err));
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
