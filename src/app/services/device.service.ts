import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  isMobile(): boolean {
    if (!this.isBrowser) return false;

    const width = window.innerWidth;
    return width < 768; // หรือจะใช้ library ตรวจ user-agent ก็ได้
  }

  getDeviceType(): 'mobile' | 'desktop' {
    if (!this.isBrowser) return 'desktop';
    return this.isMobile() ? 'mobile' : 'desktop';
  }
}
