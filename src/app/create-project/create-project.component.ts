import { Component, OnInit } from '@angular/core';
import {Project} from "../Project";
import {ProjectService} from "../project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project :Project=new Project();
  constructor(private projectService:ProjectService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
   console.log(this.project);
   this.saveProject();
  }
  saveProject()
  {
    this.projectService.addProject(this.project).subscribe(data=>{
      console.log(data);


    });
  }


}
