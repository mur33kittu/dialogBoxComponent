import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule, ButtonModule, DataTableModule, DialogModule }  from 'primeng/primeng';
import { AppComponent } from './app.component';

import { dialogBoxService,dialogComponent} from './dialogBox';

@NgModule({
  declarations: [
    AppComponent,
    dialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    InputTextModule, 
    DialogModule,
    ButtonModule,
    
  ],
  providers: [dialogBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
