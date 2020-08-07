import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: ToDoListComponent },
  { path: 'about', component: AboutComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
