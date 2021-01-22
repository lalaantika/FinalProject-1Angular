import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdStorageService {

  constructor() { }

  setUid(Uid: string) {
		sessionStorage.setItem('uid', Uid);
  }
  
  getUId(): string {
		return sessionStorage.getItem('uid');
  }
  
  setloggedIn(isloggedin:string) {
		sessionStorage.setItem('isloggedin', isloggedin);
  }
  
  getUloggedIn(): string {
		return sessionStorage.getItem('isloggedin')
	}
}
