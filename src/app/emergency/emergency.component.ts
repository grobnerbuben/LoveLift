import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './emergency.component.html',
  styleUrl: './emergency.component.css'
})
export class EmergencyComponent {

  constructor(private router: Router) { }
  backHome(): void {
    this.router.navigateByUrl('');
  }
}
