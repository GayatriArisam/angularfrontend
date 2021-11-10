import { Component, OnInit } from '@angular/core';
import {Project} from "../Project";
import {ProjectService} from "../project.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  projectId:number
  project:Project
  constructor(private projectService:ProjectService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId=this.router.snapshot.params['projectId'];

    this.projectService.getProject(this.projectId).subscribe(data=>{
      this.project=data;
    })
  }

}
