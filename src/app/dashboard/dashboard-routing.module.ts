import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GraphViewComponent } from './graph-view/graph-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    children: [
      { path: 'list', component: ListViewComponent },
      { path: 'graph', component: GraphViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
