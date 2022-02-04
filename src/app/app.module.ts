import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BitComponent } from "./bit/bit.component"
import { DecComponent } from './dec/dec.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DecComponent, BitComponent, ContentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
