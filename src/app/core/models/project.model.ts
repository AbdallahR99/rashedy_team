export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  url?: string;
  github?: string;
  tags?: ('web' | 'mobile' | 'backend')[];
}
