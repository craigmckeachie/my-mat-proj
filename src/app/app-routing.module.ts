import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '', component: DashboardComponent },
  { path: 'contact', component: AddressFormComponent },
  { path: 'table', component: MyTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
