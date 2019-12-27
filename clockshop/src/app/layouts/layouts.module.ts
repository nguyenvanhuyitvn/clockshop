import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutsComponent } from './layouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutsComponent, DashboardComponent, ComponentsComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
