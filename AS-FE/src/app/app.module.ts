import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './menu/header/header.component';
import { OverviewPageComponent } from './overview/overview-page/overview-page.component';
import { DetailPageComponent } from './detail/detail-page/detail-page.component';

const appRoutes: Routes = [
  { path: 'detail', component: DetailPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: OverviewPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewPageComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
