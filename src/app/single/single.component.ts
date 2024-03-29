import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  constructor(private router: Router) { }
  backHome(): void {
    this.router.navigateByUrl('');
  }
}
