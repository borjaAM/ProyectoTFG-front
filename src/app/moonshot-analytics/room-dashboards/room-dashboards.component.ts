import { Component, OnInit } from '@angular/core';
import { MoonshotModule } from "../../model/modules";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-room-dashboards',
  templateUrl: './room-dashboards.component.html',
  styleUrls: ['./room-dashboards.component.scss']
})
export class RoomDashboardsComponent implements OnInit {

  public links : MoonshotModule[] = [
    { name: 'Chats', iconName: 'assets/icons/direct-chat.svg', description: '', url: '/rooms/direct-chats' },
    { name: 'Rooms', iconName: 'assets/icons/follow-up-rooms.svg', description: '', url: '/rooms/follow-up-rooms' },
    { name: 'Channels', iconName: 'assets/icons/public-channels.svg', description: '', url: '/rooms/public-channels' }
  ];

  public activeLink : string = 'Chats';
  public dashboardUrl : string  = "http://localhost:3000/public/dashboard/dc62de43-05ce-4ea2-886d-f25d04c468cf";

  public displayDirectChatsDashboard: boolean = true;
  public displayFollowUpRoomsDashboard: boolean = false;
  public displayPublicChannelsDashboard: boolean = false;

  constructor(private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe((params) => {
      console.log(params)
      switch (params.dashboard) {
        case 'direct-chats':
          this.displayDirectChatsDashboard = true;
          this.displayFollowUpRoomsDashboard = false;
          this.displayPublicChannelsDashboard = false;
          break;

        case 'follow-up-rooms':
          this.displayDirectChatsDashboard = false;
          this.displayFollowUpRoomsDashboard = true;
          this.displayPublicChannelsDashboard = false;
          break;

        case 'public-channels':
          this.displayDirectChatsDashboard = false;
          this.displayFollowUpRoomsDashboard = false;
          this.displayPublicChannelsDashboard = true;
          break;
      }
    });
  }

}
