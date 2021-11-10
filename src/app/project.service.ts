import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "./Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

private baseURL="http://localhost:8087/api/v1/Project";

//dependency injection'
  constructor(private httpClient:HttpClient) { }


public  getProjects():Observable<Project[]>
{
  return this.httpClient.get<Project[]>(`${this.baseURL}`);
}
public getProject(projectId:number):Observable<Project>{
  return this.httpClient.get<Project>(`${this.baseURL}/${projectId}`);
}
public addProject(project:Project):Observable<Object>
{
  return this.httpClient.post<Object>(`${this.baseURL}`,project);
}

  public updateProject(projectId:number,project:Project):Observable<Object>
  {
    return this.httpClient.put<Object>(`${this.baseURL}/${projectId}`,project);
  }


  public deleteProject(projectId:number):Observable<Object>
  {
    return this.httpClient.delete<Object>(`${this.baseURL}/${projectId}`);
  }



}
