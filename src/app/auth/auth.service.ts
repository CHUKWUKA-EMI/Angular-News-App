import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {}

  getUserState() {
    return this.afAuth.authState;
  }

  createUser(user) {
    this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential);
        this.newUser = user;
        userCredential.user.updateProfile({
          displayName: user.email,
        });
        this.insertUserData(userCredential).then(() => {
          this.router.navigate(['/news']);
        });
      })
      .catch((error) => {
        this.eventAuthError.next(error);
      });
  }

  insertUserData(userCredential: firebase.default.auth.UserCredential) {
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      password: this.newUser.password,
    });
  }

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential) {
          this.router.navigate(['/news']);
        }
      })
      .catch((error) => {
        this.eventAuthError.next(error);
      });
  }

  logout() {
    this.afAuth.signOut();
  }
}
