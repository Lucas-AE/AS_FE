import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './menu/header/header.component';
import { OverviewPageComponent } from './overview/overview-page/overview-page.component';
import { DetailPageComponent } from './detail/detail-page/detail-page.component';
import { FilterSegmentComponent } from './menu/filter-segment/filter-segment.component';
import { FilterComponent } from './menu/filter/filter.component';
import { ChartOverviewComponent } from './overview/chart-overview/chart-overview.component';
import { ChartComponent } from './overview/chart/chart.component';
import { ChartInfoComponent } from './overview/chart-info/chart-info.component';
import { SegmentsOverviewComponent } from './overview/segments-overview/segments-overview.component';
import { SegmentComponent } from './overview/segment/segment.component';

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
    DetailPageComponent,
    FilterSegmentComponent,
    FilterComponent,
    ChartOverviewComponent,
    ChartComponent,
    ChartInfoComponent,
    SegmentsOverviewComponent,
    SegmentComponent
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
