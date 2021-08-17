import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: String;
  public password: String;

  constructor(private http: HttpClient) {

  }

  authenticationService(username: string, password: String) {
    // let user = new User(username, password);
    // let httpHeaders = new HttpHeaders();
    // let basicAuthToken = this.createBasicAuthToken(username,password);
    // httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    // httpHeaders = httpHeaders.set('Authorization', basicAuthToken);
    // return this.http.post(`http://localhost:8080/api/v1/basicauth`, user, {headers: httpHeaders })
    //   .pipe(
    //     map((res: User) => {
    //     this.username = res.username;
    //     this.password = res.password;
    //     this.registerSuccessfulLogin(username, password);
    //   })
    // );
    return this.http.get(`http://localhost:8080/api/v1/basicauth`,
    {headers: new HttpHeaders().set('Authorization', this.createBasicAuthToken(username,password))} 
    ).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username: string, password: String) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}