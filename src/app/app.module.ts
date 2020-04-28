import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { NgModalModule } from "ng-modal";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { CardComponent } from './components/card/card.component';
import { MyModalComponent } from './components/my-modal/my-modal.component';
import { JokeComponent } from './components/joke/joke.component';
import { SearchComponent } from './components/search/search.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CardComponent,
    MyModalComponent,
    JokeComponent,
    SearchComponent,
    HomepageComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgModalModule
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
