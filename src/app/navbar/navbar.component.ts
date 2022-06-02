import { Component, OnInit } from '@angular/core';
import { MoonshotModule } from "../model/modules";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public logo: string = "assets/MoonshotLogo.svg";
  public activeLink: string = "Home";
  public modules: MoonshotModule[] = [];

  constructor() {
    this.activeLink = 'Home';
    this.modules.push({name: "Home",
      iconName: "assets/icons/home.svg",
      description: "",
      url: "/my-ecosystem"});
    this.modules.push({name: "Community",
      iconName: "assets/icons/community.svg",
      description: "",
      url: "/community/members"});
    this.modules.push({name: "Rooms",
      iconName: "assets/icons/rooms.svg",
      description: "",
      url: "/rooms/direct-chats"});
    this.modules.push({name: "Processes",
      iconName: "assets/icons/process.svg",
      description: "",
      url: "/processes/projects"});
  }

  ngOnInit(): void {
  }

}
