import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Input() email: string;
  @Input() password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
      console.log(email)
      console.log(password)
  }
}