import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {CreateProjectComponent} from "./create-project/create-project.component";
import {UpdateProjectComponent} from "./update-project/update-project.component";
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectDetailsComponent} from "./project-details/project-details.component";

const routes: Routes = [
  {path:'projects',component:ProjectListComponent},
  {path:'create-project',component:CreateProjectComponent},
  {path:'update-project/:projectId',component:UpdateProjectComponent},
  {path:'project-details/:projectId',component:ProjectDetailsComponent},
  {path: '', redirectTo: 'projects', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
