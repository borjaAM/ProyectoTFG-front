import {Component, Input, OnInit} from '@angular/core';
import {MoonshotModule} from "../model/modules";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-tab',
  templateUrl: './navigation-tab.component.html',
  styleUrls: ['./navigation-tab.component.scss']
})
export class NavigationTabComponent implements OnInit {

  @Input('navigationLinks') modules: MoonshotModule[];
  @Input('activeLink') activeLink: string;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.activeLink = this.modules[0].iconName;
  }

}
