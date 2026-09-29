import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.http.post("https://localhost:7089/api/Login/login", { username, password }, { responseType: 'text' }).subscribe({
      next: data => {
        console.log(data);
        // Navigate back to your posts list page upon successful login
        this.router.navigate(['']);
      },
      error: err => {
        console.error(err);
      }
    });
  }
}