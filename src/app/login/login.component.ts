import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoginForm, AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({selector: 'nu7-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {

  init : LoginForm = {
    email: '',
    password: ''
  };

  constructor(private authSrv : AuthService, private router: Router) {}

  ngOnInit() {}

  login(form : NgForm) {
    console.log(form);
    if (form.valid) {
      console.log('form is valid content: ', form.value);
      const lf = form.value as LoginForm;
      this.authSrv.login(lf).subscribe(res => {
          if (res) {
            this.router.navigate(['/home']);
          }
        }, console.error);
    } else {
      window.alert('invalid form');
    }
  }

}
