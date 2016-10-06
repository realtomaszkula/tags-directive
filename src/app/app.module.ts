import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TagsCapturerDirective } from './tags.directive';
import { ValueEmitterDirective } from './value-emitter.directive';
import { TagsContainerComponent } from './tags.component';


@NgModule({
  declarations: [
    AppComponent, 
    ValueEmitterDirective,
    TagsCapturerDirective,
    TagsContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
