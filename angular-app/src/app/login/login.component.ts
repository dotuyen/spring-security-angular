import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;
  errorMessage = 'Invalid Credentials';
  successMessage: string | undefined;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticaionService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    // this.authenticaionService.AuthenticationService(this.username, this.password).subscribe((result)=> {
    //   this.invalidLogin = false;
    //   this.loginSuccess = true;
    //   this.successMessage = 'Login Successful.';
    //   this.router.navigate(['/hello-world']);
    // }, () => {
    //   this.invalidLogin = true;
    //   this.loginSuccess = false;
    // })
  }
}
