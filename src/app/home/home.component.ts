import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [
    "assets/Logos/DIRECT Lab Logo-A.png",
    "assets/Logos/DIRECT Lab Logo-B.png",
    "assets/Logos/DIRECT Lab Logo-C.png",
  ];
  index = 2;
  cur_image = this.items[this.index];

  allowed_auto_rotate = true

  constructor() { }

  ngOnInit(): void {
    this.auto_rotate()
  }

  rotate(amount: number) {
    let next_index = this.index + amount;

    while (next_index < 0) {
      next_index = this.items.length + next_index;
    }

    while (next_index >= this.items.length) {
      next_index = next_index - this.items.length;
    }

    this.index = next_index;
    this.cur_image = this.items[this.index]
  }

  auto_rotate() {
    if (this.allowed_auto_rotate) {
      this.rotate(1)
    }
    setTimeout(() => { this.auto_rotate() }, 5000)
  }

  print(message: number) {
    console.log(message)
  }
}
