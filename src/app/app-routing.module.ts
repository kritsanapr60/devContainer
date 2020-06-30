import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormVersionComponent } from '../app/form/form-version/form-version.component';

const routes: Routes = [
  { path: '', component: FormVersionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
