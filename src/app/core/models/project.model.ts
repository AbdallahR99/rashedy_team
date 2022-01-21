import { SafeResourceUrl } from "@angular/platform-browser";

export interface Project {
  id: string;
  name: string;
  shortDescription?: string;
  description: string;
  imagesUrl: string[];
  mobileImgUrls?: string[];
  mobileOnly?: boolean;
  videosUrl?: (string | SafeResourceUrl)[];
  url?: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
  github?: string;
  tags?: ('web' | 'mobile' | 'backend')[];
}
