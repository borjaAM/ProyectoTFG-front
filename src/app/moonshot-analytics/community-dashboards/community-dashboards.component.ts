import { Component, OnInit } from '@angular/core';
import { MoonshotModule } from "../../model/modules";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-community-dashboards',
  templateUrl: './community-dashboards.component.html',
  styleUrls: ['./community-dashboards.component.scss']
})
export class CommunityDashboardsComponent implements OnInit {

  public links : MoonshotModule[] = [
    { name: 'Actors', iconName: 'assets/icons/user.svg', description: '', url: '/community/members' },
    { name: 'Facets', iconName: 'assets/icons/users.svg', description: '', url: '/community/actors' },
    { name: 'Events', iconName: 'assets/icons/calendar.svg', description: '', url: '/community/events' },
    { name: 'Posts', iconName: 'assets/icons/pencil.svg', description: '', url: '/community/wall-posts' },
  ];

  public activeLink: string = 'Members';

  public displayMembersDashboard: boolean = true;
  public displayActorsDashboard: boolean = false;
  public displayEventsDashboard: boolean = false;
  public displayPostsDashboard: boolean = false;

  constructor(private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe((params) => {
      switch (params.dashboard) {
        case 'members':
          this.displayMembersDashboard = true;
          this.displayActorsDashboard = false;
          this.displayEventsDashboard = false;
          this.displayPostsDashboard = false;
          break;

        case 'actors':
          this.displayMembersDashboard = false;
          this.displayActorsDashboard = true;
          this.displayEventsDashboard = false;
          this.displayPostsDashboard = false;
          break;

        case 'events':
          this.displayMembersDashboard = false;
          this.displayActorsDashboard = false;
          this.displayEventsDashboard = true;
          this.displayPostsDashboard = false;
          break;

        case 'wall-posts':
          this.displayMembersDashboard = false;
          this.displayActorsDashboard = false;
          this.displayEventsDashboard = false;
          this.displayPostsDashboard = true;
          break;
      }
    });
  }

}
