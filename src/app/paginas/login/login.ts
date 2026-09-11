import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  constructor(private router: Router) {}

  fazerLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['/explorar']);
  }
}