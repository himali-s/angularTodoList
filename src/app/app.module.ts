import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { HeaderComponent } from './layout/header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './pages/about/about.component'

//modules like http, you will have to add
//there are modules for dom & all the component are automatically added
//declarations has the components
//all the new componenet goes in declaration
//when you use cli, it will automatically add component in the declaration
//providers will have service class
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
