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
  arrayOfNumber = []
  

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
       this.getTaskNumbers(this.allProjectData)
      })
  }

  getTaskNumbers(allProjectData: ProjectData[]) {
    console.log(allProjectData)
    console.log(this.allProjectData[0].noOfTasks)
    for (var i = 0; i < allProjectData.length; i++) {
         this.arrayOfNumber[i]=allProjectData[i].noOfTasks
    }
    console.log(this.arrayOfNumber)
    return this.arrayOfNumber
  }

  // sortingthevalues(arrayOfNumber) {
  //   let n = arrayOfNumber.length;
  //       for (let i = 1; i < n; i++) {
  //           let current =arrayOfNumber[i];
  //           let j = i-1; 
  //           while ((j > -1) && (current <arrayOfNumber[j])) {
  //             arrayOfNumber[j+1] = arrayOfNumber[j];
  //               j--;
  //           }
  //         arrayOfNumber[j+1] = current;
  //       }
  //       console.log(arrayOfNumber);
  //   return arrayOfNumber;
  // }

  reload(){
    setTimeout(function(){
    location.reload();
    },1000); 
  }

  swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
  }

  bubble_Sort(arrayOfNumber){

    var len = arrayOfNumber.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arrayOfNumber[j] > arrayOfNumber[j+1]){
                this.swap(arrayOfNumber, j, j+1);
            }
        }
    }

    return arrayOfNumber;
  }
}
