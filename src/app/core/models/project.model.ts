import { SafeResourceUrl } from "@angular/platform-browser";

export interface Project {
  name: string;
  shortDescription?: string;
  description: string;
  imagesUrl: string[];
  mobileImgUrl?: string;
  mobileOnly?: boolean;
  videosUrl?: (string | SafeResourceUrl)[];
  url?: string;
  github?: string;
  tags?: ('web' | 'mobile' | 'backend')[];
}
