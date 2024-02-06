import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  constructor(private router: Router) { }
  btnClickSingle() {
    this.router.navigateByUrl('single');
  };

  btnClickCouple() {
    this.router.navigateByUrl('couple');
  };

  btnClickRather() {
    this.router.navigateByUrl('rather');
  };

  btnClickEmergency() {
    this.router.navigateByUrl('emergency');
  };
}
