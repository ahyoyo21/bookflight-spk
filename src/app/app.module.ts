import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './components/flight/flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageService } from './share/page.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialExampleModule } from './material.module';
import { MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    HttpClientModule,
  ],
  providers: [
    PageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
