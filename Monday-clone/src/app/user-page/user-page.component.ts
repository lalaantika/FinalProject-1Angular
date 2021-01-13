import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectData } from '../interfaces/project-data';
import { UserInfo } from '../interfaces/user-info';
import { IdStorageService } from '../services/id-storage.service';
import { ProjectDataService } from '../services/project-data.service';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  uid: string = this.idStorage.getUId();
  userData: UserInfo;
  allProjectData: ProjectData[];
  ride: ProjectData;

  constructor(public userInfo: UserInfoService, 
    public idStorage: IdStorageService,
    public projectService: ProjectDataService,
    public router: Router) { }

  ngOnInit(): void {
    this.getUserData();
    this.getProjectData();
    console.log(this.uid, this.allProjectData)
  }

  getUserData() {
    this.userInfo.getUserByID(this.uid).subscribe((res) => {
      this.userData = res as unknown  as UserInfo;
    })
  }

  getProjectData() {
    this.projectService.getProjectbyUid(this.uid).subscribe(
      res => {
        this.allProjectData = res as Array<ProjectData>
       })
  }
}
