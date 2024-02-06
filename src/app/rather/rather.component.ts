import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-rather',
  standalone: true,
  templateUrl: './rather.component.html',
  styleUrls: ['./rather.component.css']
})
export class RatherComponent {
  questions: string[] = [
    "have sex on the first date?",
    "rob a bank?",
    "drink too much?",
  ];

  currentQuestionIndex: number = 0;
  constructor(private router: Router) { }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  backHome(): void {
    this.router.navigateByUrl('');
  }
}
