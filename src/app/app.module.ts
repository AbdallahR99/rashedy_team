import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '@shared/widgets/header/header.component';
import { FooterComponent } from '@shared/widgets/footer/footer.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatProgressBarModule,
    LazyLoadImageModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics()),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideMessaging(() => getMessaging()),
    // providePerformance(() => getPerformance()),
    // provideRemoteConfig(() => getRemoteConfig()),
    // provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    NgxPageScrollCoreModule.forRoot(),
    FormsModule,
  ],
  providers: [
    // { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
    // ScreenTrackingService,
    // UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
