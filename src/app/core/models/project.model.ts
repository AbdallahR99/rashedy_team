export interface Project {
  name: string;
  description: string;
  imagesUrl: string[];
  url?: string;
  github?: string;
  tags?: ('web' | 'mobile' | 'backend')[];
}
