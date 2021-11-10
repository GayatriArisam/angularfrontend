import { Component, OnInit } from '@angular/core';
import {Project} from "../Project";
import {ProjectService} from "../project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects : Project[];
  //dependeny injection
  constructor(private projectService:ProjectService,private router:Router) { }

  ngOnInit(): void {

      this.comp_getprojects();
  }
  private comp_getprojects()
  {

    this.projectService.getProjects().subscribe(data=>{this.projects=data});
  }
  comp_updateproject(projectId:number)
  {
   this.router.navigate(['update-project',projectId]);
  }
  comp_projectdetails(projectId:number)
  {
    this.router.navigate(['project-details',projectId]);
  }
  deleteproject(projectId:number)
  {
    if(confirm("Are you sure to delete" +projectId)) {
      this.projectService.deleteProject(projectId).subscribe(data => {
      })
    }
    window.location.reload();

  }
}
