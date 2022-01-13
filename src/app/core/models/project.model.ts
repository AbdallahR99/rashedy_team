import { SafeResourceUrl } from "@angular/platform-browser";

export interface Project {
  name: string;
  description: string;
  imagesUrl: string[];
  videosUrl?: (string | SafeResourceUrl)[];
  url?: string;
  github?: string;
  tags?: ('web' | 'mobile' | 'backend')[];
}
