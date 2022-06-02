import { Component, OnInit } from '@angular/core';
import { MoonshotModule } from "../../model/modules";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-processes-dashboards',
  templateUrl: './processes-dashboards.component.html',
  styleUrls: ['./processes-dashboards.component.scss']
})
export class ProcessesDashboardsComponent implements OnInit {

  public links : MoonshotModule[] = [
    { name: 'Projects', iconName: 'assets/icons/projects.svg', description: '', url: '/processes/projects' }
  ];

  public activeLink: string = 'Projects';
  public displayProjectsDashboard = true;

  constructor(private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe((params) => {
      console.log(params)
      if (params.dashboard) {
          this.displayProjectsDashboard = true;
      }
    });
  }

}
