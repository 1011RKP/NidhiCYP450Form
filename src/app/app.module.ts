import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SelectcompoundComponent } from './SelectCompound/selectcompound.component';
import { Cyp450formComponent } from './CYP450Form/cyp450form.component';

import { AppService } from './app.service';
import { OrderByPipe } from './customPipe';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { DeleterecordComponent } from './DeleteRecord/deleterecord.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectcompoundComponent,
    Cyp450formComponent,
    DeleterecordComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ToastModule.forRoot(),
    HttpClientModule
  ],
  providers: [AppService, OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
