import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'd-flex flex-column overflow-hidden'},
})
export class HomeComponent implements OnInit {
  // public active_fragment: BehaviorSubject<string> = new BehaviorSubject('');
  // get sectionsKeys(): Array<string> {
  //   var keys = Object.keys(SectionsIndex);
  //   return keys.slice(keys.length / 2);
  // }
  constructor(
    private pageScrollService: PageScrollService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: Document) {
      // this.activatedRoute.fragment.subscribe((frag: any) => {
      //   this.active_fragment.next(frag);
      // });
    }

  ngOnInit(): void {
    console.log(this.activatedRoute);

    this.pageScrollService.scroll({
      document: this.document,

      scrollTarget: '.theEnd',
    });
  }

  // @HostListener('window:scroll', ['$event'])
  // private _update_active_fragment(event: any) {
  //   const section1 = this.document.getElementById(SectionsIndex.Section1)!;
  //   const section2 = this.document.getElementById(SectionsIndex.Section2)!;
  //   const section3 = this.document.getElementById(SectionsIndex.Section3)!;
  //   const section4 = this.document.getElementById(SectionsIndex.Section4)!;
  //   event.preventDefault();



  //   switch (true) {
  //     // case window.pageYOffset >=
  //     //  section1.offsetTop: {
  //     //     if (this.active_fragment.value !== SectionsIndex.Section1) {
  //     //       this.active_fragment.next(SectionsIndex.Section1);
  //     //       this.router.navigate([], {fragment: SectionsIndex.Section1, relativeTo: this.activatedRoute});
  //     //     }
  //     //   break;
  //     // }
  //     case window.pageYOffset >=
  //      section1.offsetTop &&
  //       window.pageYOffset <= section2.offsetTop: {
  //         if (this.active_fragment.value !== SectionsIndex.Section2) {
  //           this.active_fragment.next(SectionsIndex.Section2);
  //           this.router.navigate([], {fragment: SectionsIndex.Section2, relativeTo: this.activatedRoute});
  //         }
  //       break;
  //     }

  //     case window.pageYOffset >= section2.offsetTop &&
  //       window.pageYOffset <= section3.offsetTop: {
  //       if (this.active_fragment.value !== SectionsIndex.Section3) {
  //         this.active_fragment.next(SectionsIndex.Section3);
  //         this.router.navigate([], {fragment: SectionsIndex.Section3, relativeTo: this.activatedRoute});
  //       }
  //       break;
  //     }


  //     default:
  //       break;
  //   }
  // }

}
// enum SectionsIndex {
//   Section1 = 'intro',
//   Section2 = 'about',
//   Section3 = 'skills',
//   Section4 = 'portfolio',
//   Section5 = 'intro',
// }
