import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;

  constructor(
    private afDatabase: AngularFireDatabase
  ) { }

  get currentUser(): User {
    return this.user;
  }

  getUser() {
    
    return this.user;
  }

  setUser(userId) {
    this.user = this.afDatabase.object(`Users/${userId}`);
  }

  createUser(auth, user) {
    this.afDatabase.object(`Users/${auth.uid}`)
      .set(user);
  }
}
