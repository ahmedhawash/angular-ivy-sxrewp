import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatToolbarModule, MatIconModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
