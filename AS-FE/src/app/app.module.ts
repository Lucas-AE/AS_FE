import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MockApiService } from './api/mock-api.service';

import { AppComponent } from './app.component';
import { BarometerComponent } from './detail/barometer/barometer.component';
import { DetailPageComponent } from './detail/detail-page/detail-page.component';
import { HistoriekComponent } from './detail/historiek/historiek.component';
import { InfoComponent } from './detail/info/info.component';
import { BarometerStatePipe } from './filters/barometer-state.pipe';
import { FilterService } from './filters/filter.service';
import { SectorPipe } from './filters/sector.pipe';
import { SegmentPipe } from './filters/segment.pipe';
import { FilterSegmentComponent } from './menu/filter-segment/filter-segment.component';
import { FilterComponent } from './menu/filter/filter.component';
import { HeaderComponent } from './menu/header/header.component';
import { CategoryColumnComponent } from './overview/chart-info/category-column/category-column.component';
import { ChartInfoComponent } from './overview/chart-info/chart-info.component';
import { ChartOverviewComponent } from './overview/chart-overview/chart-overview.component';
import { ChartComponent } from './overview/chart/chart.component';
import { OverviewPageComponent } from './overview/overview-page/overview-page.component';
import { SegmentComponent } from './overview/segment/segment.component';
import { SegmentsOverviewComponent } from './overview/segments-overview/segments-overview.component';
import { AmPipe } from './filters/am.pipe';
import { TmPipe } from './filters/tm.pipe';
import { ResetButtonComponent } from './menu/reset-button/reset-button.component';

const appRoutes: Routes = [
  { path: 'detail/:account_name', component: DetailPageComponent },
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
    SegmentComponent,
    InfoComponent,
    BarometerComponent,
    HistoriekComponent,
    SectorPipe,
    SegmentPipe,
    BarometerStatePipe,
    CategoryColumnComponent,
    AmPipe,
    TmPipe,
    ResetButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    NgxChartsModule
  ],
  providers: [
    { provide: 'IApiService', useClass: MockApiService },
    { provide: 'FilterService', useClass: FilterService }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
