import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HttpApiService } from './service/http-api.service';
import { TableOfBooksComponent } from './table-of-books/table-of-books.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TableOfBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
