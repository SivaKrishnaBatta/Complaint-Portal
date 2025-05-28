import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { ComplaintViewComponent } from './complaint-view/complaint-view.component';
import { ComplaintUpdateComponent } from './complaint-update/complaint-update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintFormComponent,
    ComplaintListComponent,
    ComplaintViewComponent,
    ComplaintUpdateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
