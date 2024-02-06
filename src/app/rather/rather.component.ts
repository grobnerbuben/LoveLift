import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-rather',
  standalone: true,
  templateUrl: './rather.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./rather.component.css']
})
export class RatherComponent implements OnInit{
  questions: string[] = [
    "have sex on the first date?",
    "rob a bank?",
    "drink too much?",
  ];

  ngOnInit() {
    this.currentQuestionIndex = 0;
  }

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
