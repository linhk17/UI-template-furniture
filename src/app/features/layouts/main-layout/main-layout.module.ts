import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderMainLayoutComponent } from './header-main-layout/header-main-layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterMainLayoutComponent } from './footer-main-layout/footer-main-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderMainLayoutComponent,
    FooterMainLayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MainLayoutModule { }
