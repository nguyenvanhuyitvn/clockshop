import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutsComponent } from './layouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from './components/components.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutsComponent, DashboardComponent, ComponentsComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SlickCarouselModule,
    OwlModule
  ]
})
export class LayoutsModule { }
