import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppcontentComponent } from './appcontent/appcontent.component'

const routes: Routes = [
  { path: 'dashboard', component: AppcontentComponent },
  { path : '', redirectTo: '/dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
