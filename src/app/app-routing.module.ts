import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { ComplaintViewComponent } from './complaint-view/complaint-view.component';
import { ComplaintUpdateComponent } from './complaint-update/complaint-update.component';

const routes: Routes = [
  { path: 'list', component: ComplaintListComponent },
  {path:'add', component: ComplaintFormComponent},
  { path: 'view/:id', component: ComplaintViewComponent },
  { path: 'complaints/update/:id', component: ComplaintUpdateComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
