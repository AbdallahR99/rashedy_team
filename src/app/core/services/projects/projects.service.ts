import { Injectable } from '@angular/core';
import { Project } from '@models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private _projects: Project[] = [
    {
      id: 'Resturants_Platform',
      name: 'Resturants Platform',
      shortDescription: 'test short description',
      description: 'test long description',
      imagesUrl: ['assets/img/portfolio/resturant/resturant_pc.jpeg','assets/img/portfolio/resturant/rest.png',
              'assets/img/portfolio/resturant/Resturant1.png',
              'assets/img/portfolio/resturant/Resturant2.png',
              'assets/img/portfolio/resturant/Resturant3.png',
              'assets/img/portfolio/resturant/Resturant4.png',
              'assets/img/portfolio/resturant/Resturant5.png',],
      mobileImgUrls: ['assets/img/portfolio/resturant/resturant_mobile.jpeg'],
      tags: ['web', 'backend'],
    },
    {
      id: 'Business_Platform',
      name: 'Business Platform',
      description: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ',
      imagesUrl: ['assets/img/portfolio/business/business_pc.jpeg', 'assets/img/portfolio/business/business.png','assets/img/portfolio//business/business1.png',
      'assets/img/portfolio//business/business3.png', 'assets/img/portfolio//business/business.png'],
      mobileImgUrls: ['assets/img/portfolio/business/business_mobile.jpg'],
      videosUrl: ['tgbNymZ7vqY', 'A0GuKuk7IxE'],
      tags: ['web', 'mobile', 'backend'],
    },
    {
      id: 'Emdady',
      name: 'Emdady',
      description: '',
      imagesUrl: ['assets/img/portfolio/emdady/emdady_pc.jpeg', 'assets/img/portfolio/emdady/emdady_mobile.jpeg',],
      mobileImgUrls: ['assets/img/portfolio/emdady/emdady_mobile.jpeg'],
      tags: ['mobile', 'web', 'backend'],
    },
    {
      id: 'Kolo_Mashy',
      name: 'Kolo Mashy',
      description: 'test details',
      imagesUrl: ['assets/img/portfolio/kolomashy/kolomashy_pc.jpeg', 'assets/img/portfolio/kolomashy/home.png','assets/img/portfolio/kolomashy/kolo1.png',
              'assets/img/portfolio/kolomashy/kolo2.png', 'assets/img/portfolio/kolomashy/kolo3.png',
              ],
      mobileImgUrls: ['assets/img/portfolio/kolomashy/kolomashy_mobile.jpg'],
      url: 'https://www.kolomashy.com',
      googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.kolo.kolo_mashy',
      tags: ['web', 'backend', 'mobile'],
    },

    {
      id: 'Customer_Index',
      name: 'Customer Index',
      description: '',
      imagesUrl: ['assets/img/portfolio/customerIndex/customerIndex_pc.jpeg', 'assets/img/portfolio/customerIndex/indexx.png', 'assets/img/portfolio/customerIndex/index.png',
              'assets/img/portfolio/customerIndex/index1.png', 'assets/img/portfolio/customerIndex/index3.png',
              ],
      mobileImgUrls: ['assets/img/portfolio/customerIndex/customerIndex_mobile.png'],
      tags: ['mobile', 'backend'],
    },
    {
      id: 'RitzLine',
      name: 'RitzLine',
      description: '',
      imagesUrl: ['assets/img/portfolio/ritzline/ritzline_pc.jpeg',],
      mobileImgUrls: ['assets/img/portfolio/ritzline/1.png',
      'assets/img/portfolio/ritzline/ritzline.png','assets/img/portfolio/ritzline/ritzline1.png',
      'assets/img/portfolio/ritzline/ritzline2.png', 'assets/img/portfolio/ritzline/ritzline3.png',],
      tags: [ 'mobile', 'backend'],
    },
  ];
  constructor() { }

  get(id: string): Project | undefined {
    return this._projects.find(project => project.id == id);
  }

  list(): Project[] {
    return this._projects;
  }
}
