import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from '@models/project.model';

@Component({
  selector: 'app-home-portfolio-modal',
  templateUrl: './home-portfolio-modal.component.html',
  styleUrls: ['./home-portfolio-modal.component.scss']
})
export class HomePortfolioModalComponent implements OnInit {
  _project!: Project;
  get project(): Project {
    return this._project;
  }

  @Input() set project(proj: Project) {
    const data = proj;
    if (proj.videosUrl) {
     data.videosUrl = proj?.videosUrl?.map(video =>
        this.updateVideoUrl(video as string)
      )!;
    }
    this._project = data;
  }
  @Output() closeModal = new EventEmitter<never>();
  currentSlideImg = 0;

  constructor(private sanitizer: DomSanitizer) {
    this.project?.videosUrl?.forEach(video => {
      video = this.updateVideoUrl(video as string);
    })
  }

  ngOnInit(): void {
  }

  goToImage(path: string){
    window.open(path,'_blank');
  }

  close(): void {
    this.closeModal.emit();
  }

  updateVideoUrl(id: string) {
    const dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    return  this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }

  imgSlide(index: number): void {
    this.currentSlideImg = index;
  }

  nextSlide(): void {
    if (this.currentSlideImg < (this.project.imagesUrl.length - 1)) {
      this.currentSlideImg++;
    } else {
      this.currentSlideImg = 0;
    }
  }
  prevSlide(): void {
    if (this.currentSlideImg > 0) {
      this.currentSlideImg--
    } else {
      this.currentSlideImg = (this.project.imagesUrl.length - 1);
    }
  }


}
