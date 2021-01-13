import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { map } from 'rxjs/operators';
import { UserAuthserviceService } from './user-authservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(public db:AngularFirestore,
    public afAuth: UserAuthserviceService, public router:Router) { }

    getUserByID(uid: string): Observable<User> {
      return this.db.collection('UserInfo').doc(uid).snapshotChanges().pipe(
        map(res => {
          const user = res.payload.data() as User;
          return user;
        })
      );
    }
}
