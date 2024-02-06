import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-couples',
  standalone: true,
  imports: [],
  templateUrl: './couples.component.html',
  styleUrl: './couples.component.css'
})
export class CouplesComponent {

  constructor(private router: Router) { }
  backHome(): void {
    this.router.navigateByUrl('');
  }
}
