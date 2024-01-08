import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { MainAnimationComponent } from 'src/app/shared/main-animation/main-animation.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainAnimationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainAnimationComponent
  ]
})
export class HomeModule { }
