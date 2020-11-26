import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/models/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;
  constructor(private _router: Router, private _auth: AuthService) {}

  authenticate(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this._auth
        .authenticate(this.username, this.password)
        .subscribe((response) => {
          if (response) {
            this._router.navigateByUrl('/admin/main');
          } else {
            this.errorMessage = 'Datos incorrectos';
          }
        });
    } else {
      this.errorMessage = 'Datos incorrectos';
    }
  }

  ngOnInit(): void {}
}
