import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectData } from '../interfaces/project-data';
import { IdStorageService } from './id-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor(public db: AngularFirestore,private idStore: IdStorageService) { }

  createProject(projectName:string, uid:string, projectCreator: string, noOfTasks: number){
    let today = new Date();
    return this.db.collection('projectData').add({
      projectName: projectName,
      uid: uid,
      projectCreator: projectCreator,
      creationDate: today,
      noOfTasks: noOfTasks
    })
  }

  getProjectbyUid(uid:string): Observable<ProjectData []> {
    return this.db.collection('/projectData', 
    ref => ref.where('uid', '==', uid
    ))
    .snapshotChanges().pipe(
      map(action => {
        return action.map(res => {
          const project = res.payload.doc.data() as ProjectData;
          const id = res.payload.doc.id;
          return { id, ...project };
        })
      })
    );
  }
}
