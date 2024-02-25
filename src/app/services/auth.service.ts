import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
 @Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: AngularFireAuth) { }
  signIn(user:any){
    return this.auth.signInWithEmailAndPassword(user.email,user.password);
  }
}
