import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { AccountComponent } from './pages/account/account.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContentComponent } from './pages/content/content.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SearchComponent } from './shared/search/search.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthService } from './core/services/auth/auth.service';
import { UserService } from './core/services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule, MatRadioModule,
  MatSelectModule, MatSliderModule, MatSlideToggleModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ErrComponent } from './err/err.component';
import { SignUpComponent } from './shared/forms/sign-up/sign-up.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeAboutComponent } from './pages/home/home-about/home-about.component';
import { HomeSliderComponent } from './pages/home/home-slider/home-slider.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SignInComponent } from './shared/dialog/sign-in/sign-in.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TomcruiseComponent } from './celebrities/tomcruise/tomcruise.component';
import { BeyonceComponent } from './celebrities/beyonce/beyonce.component';
import { WillemdafoeComponent } from './celebrities/willemdafoe/willemdafoe.component';
import { JayzComponent } from './celebrities/jayz/jayz.component';

import { ZbTestHomeComponent } from './zb-test-components/zb-test-home/zb-test-home.component';
import { ZbTestGenreComponent } from './zb-test-components/zb-test-genre/zb-test-genre.component';
import { PageNavComponent } from './zb-test-components/zb-test-home/page-nav/page-nav.component';
import { HomeTopSectionComponent } from './zb-test-components/zb-test-home/home-top-section/home-top-section.component';
import { HomeSlideshowComponent } from './zb-test-components/zb-test-home/home-slideshow/home-slideshow.component';
import { ZbTestGenrePageComponent } from './zb-test-components/zb-test-genre-page/zb-test-genre-page.component';
import { ZbHomeSlider2Component } from './zb-test-components/zb-test-home/zb-home-slider2/zb-home-slider2.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

import { VerifyEmailComponent } from './shared/forms/verify-email/verify-email.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { NascarComponent } from './pages/categories/nascar/nascar.component';
import { TravelComponent } from './pages/categories/travel/travel.component';
import { EducationComponent } from './pages/categories/education/education.component';
import { FoodComponent } from './pages/categories/food/food.component';
import { MusicComponent } from './pages/categories/music/music.component';
import { MoviestvComponent } from './pages/categories/moviestv/moviestv.component';
import { FootballComponent } from './pages/categories/football/football.component';
import {DetailsUploadComponent} from './upload/details-upload/details-upload.component';
import {FormUploadComponent} from './upload/form-upload/form-upload.component';
import {ListUploadComponent} from './upload/list-upload/list-upload.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginRegisterComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SupportComponent,
    AccountComponent,
    TermsComponent,
    ContentComponent,
    FaqComponent,
    ForgotpasswordComponent,
    SearchComponent,
    ErrComponent,
    SignUpComponent,
    SignInComponent,
    HomeAboutComponent,
    HomeSliderComponent,
    ExploreComponent,
    JayzComponent,
    TomcruiseComponent,
    BeyonceComponent,
    WillemdafoeComponent,
    ZbTestHomeComponent,
    ZbTestGenreComponent,
    PageNavComponent,
    HomeTopSectionComponent,
    HomeSlideshowComponent,
    ZbTestGenrePageComponent,
    ZbHomeSlider2Component,
    VerifyEmailComponent,
    NascarComponent,
    TravelComponent,
    EducationComponent,
    FoodComponent,
    MusicComponent,
    MoviestvComponent,
    FootballComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    NgxPaginationModule,
    SlideshowModule,
    ScrollingModule,
    SwiperModule

  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  entryComponents: [SignInComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
