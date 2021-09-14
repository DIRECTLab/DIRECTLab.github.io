import { Component, OnInit, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RobotLabWebsite';

  mode = "left"
  content_class = "left_content"

  ngOnInit(): void {
    this.checkSize();
  }


  @HostListener("window:resize", [])
  onResize() {
    this.checkSize()
  }

  checkSize() {
    let size = window.innerWidth;

    if (size < 1000) {
      this.mode = "top"
      this.content_class = "top_content"
    }
    else {
      this.mode = "left"
      this.content_class = "left_content"
    }
  }

}
