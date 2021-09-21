import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() items: string[] = [];
  @Input() allowed_auto_rotate: Boolean = true


  index = 0;
  cur_image = this.items[this.index];

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
}
