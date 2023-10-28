import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GraphViewComponent } from './graph-view/graph-view.component';

@NgModule({
  declarations: [MainDashboardComponent, ListViewComponent, GraphViewComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
