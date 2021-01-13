import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { User } from '../interfaces/user';
import { IdStorageService } from './id-storage.service';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthserviceService {
  user: User;
  userInfo: UserInfoService;
  currentUser: any;
  
  constructor( public afs: AngularFirestore, 
    public afAuth: AngularFireAuth, 
    public idstorage: IdStorageService,
    public router:Router) {
      this.afAuth.authState.subscribe(user => {
        if (user){
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          localStorage.setItem('user', null);
        }
     })
    }
    
    async login(email: string, password: string) {
      var result = await this.afAuth.signInWithEmailAndPassword(email, password)
      this.idstorage.setloggedIn("true")
      this.router.navigate(['user-page']);
      let uid = (await this.afAuth.currentUser).uid
      this.idstorage.setUid(uid)
    }
     
    async register(email: string, password: string, fname:string,
      lname: string, phone:string, city:string) {
     var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
     let uid = (await this.afAuth.currentUser).uid
     this.idstorage.setUid(uid)
     this.idstorage.setloggedIn("true")
     this.router.navigate(['user-page']);
     return from( this.afs.collection('/UserInfo').doc(uid).set({
       firstName: fname, 
       lastName: lname, 
       email: email, 
       phone: phone, 
       city: city,
     }))
    }

    async logout(){
      await this.afAuth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
      this.idstorage.setloggedIn("false")
      let uid=""
      this.idstorage.setUid(uid)
    }

}
