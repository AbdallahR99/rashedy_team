import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routes as r } from '@constants/routes';

const routes: Routes = [
  { path: r.Home.substring(1), loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: r.Blog.substring(1), loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule) },
  { path: '', redirectTo:  r.Home, pathMatch: 'full' },
  { path: '**', redirectTo:  r.Home, pathMatch: 'full' },
  { path: '*', redirectTo:  r.Home, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
