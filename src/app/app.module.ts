import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoonshotBannerComponent } from './moonshot-banner/moonshot-banner.component';
import { MyEcosystemComponent } from './moonshot-analytics/my-ecosystem-dashboards/my-ecosystem.component';
import { RoomDashboardsComponent } from './moonshot-analytics/room-dashboards/room-dashboards.component';
import { CommunityDashboardsComponent } from './moonshot-analytics/community-dashboards/community-dashboards.component';
import { ProcessesDashboardsComponent } from './moonshot-analytics/processes-dashboards/processes-dashboards.component';
import { NavigationTabComponent } from './navigation-tab/navigation-tab.component';

const appRoutes: Routes = [
  { path: '', component: MyEcosystemComponent },
  { path: 'my-ecosystem', component: MyEcosystemComponent },
  { path: 'community/:dashboard', component: CommunityDashboardsComponent },
  { path: 'rooms/:dashboard', component: RoomDashboardsComponent },
  { path: 'processes/:dashboard', component: ProcessesDashboardsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoonshotBannerComponent,
    MyEcosystemComponent,
    RoomDashboardsComponent,
    CommunityDashboardsComponent,
    ProcessesDashboardsComponent,
    NavigationTabComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
