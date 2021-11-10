import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../Project";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
projectId:number;
project:Project;
  constructor(private projectService:ProjectService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.projectId=this.route.snapshot.params['projectId'];
    this.projectService.getProject(this.projectId).subscribe(data=>{
      this.project=data;
    })
  }
  onSubmit(){
    this.projectService.updateProject(this.projectId,this.project).subscribe(data=>{
      this.gotoProjects();
    })
  }
  gotoProjects()
  {
    this.router.navigate(['/projects']);
  }
}
