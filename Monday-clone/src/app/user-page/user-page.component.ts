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
  arrayOfNumber: any;
  

  constructor(public userInfo: UserInfoService, 
    public idStorage: IdStorageService,
    public projectService: ProjectDataService,
    public router: Router) { }

  ngOnInit(): void {
    this.getUserData();
    this.getProjectData();
    
  }

  getUserData() {
    this.userInfo.getUserByID(this.uid).subscribe((res) => {
      this.userData = res as unknown  as UserInfo;
    })
  }

  getProjectData() {
    this.projectService.getProjectbyUid(this.uid).subscribe(
      res => {
        this.allProjectData = res as unknown as  Array<ProjectData>
        console.log(this.allProjectData)
        console.log(this.allProjectData.indexOf[0].numberOfTask)
        this.arrayOfNumber = [this.allProjectData[0].numberOfTask, this.allProjectData[1].numberOfTask];
        console.log(this.arrayOfNumber);
        this.sortingthevalues(this.arrayOfNumber);
      })
  }

  reload(){
    setTimeout(function(){
    location.reload();
    },1000); 
  }

  sortingthevalues(arrayOfNumber) {
    let n = arrayOfNumber.length;
        for (let i = 1; i < n; i++) {
            let current =arrayOfNumber[i];
            let j = i-1; 
            while ((j > -1) && (current <arrayOfNumber[j])) {
              arrayOfNumber[j+1] = arrayOfNumber[j];
                j--;
            }
          arrayOfNumber[j+1] = current;
        }
        console.log(arrayOfNumber);
    return arrayOfNumber;
  }
}
