import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
