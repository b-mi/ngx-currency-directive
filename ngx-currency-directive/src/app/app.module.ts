import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { SampleComponent } from './sample/sample.component';

@NgModule({
   declarations: [
      AppComponent,
      AppDashboardComponent,
      SampleComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatGridListModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
