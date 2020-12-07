import { User } from './../model/User';
import { TransfertService } from './../service/local/transfert.service';
import { TokenService } from './../service/token.service';
import { LoginService } from './../service/login.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  form: any = {};
  isLoginFailed = false;
isLogin=false;
  errorMessage = 'Invalide donne';
  roles: string[] = [];
  constructor(   private route: ActivatedRoute,
    private router: Router,private authService:LoginService,private tokenStorage : TokenService,private isLoggedIn:TransfertService ) {
      this.isLoggedIn.isLoggedIn=false;
      this.isLogin=this.isLoggedIn.isLoggedIn;

    }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      //this.isLoggedIn.idUser=this
    }
  }

  /*

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['home']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
      console.log(this.username+" "+this.password );
    });
  }
*/

onSubmit() {
  this.authService.login(this.form).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      this.isLoginFailed = false;
    //  this.isLoggedIn.idUser=data.user.id;

      //console.log("hetha id"+this.isLoggedIn.idUser);

      this.isLoggedIn.isLoggedIn = true;
     this.isLogin=this.isLoggedIn.isLoggedIn;
      this.roles = this.tokenStorage.getUser().roles;
    this.reloadPage();
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
}

reloadPage() {
//
  window.location.reload();
  this.router.navigate(['home']);
}

}
