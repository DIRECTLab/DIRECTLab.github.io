import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header_image = "assets/Logos/DIRECT Lab Logo-A.png"
  links = [
    "Home",
    "Active Research",
    "Members"
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  jump(link: string) {
    console.log("here")
    console.log(link)
    if (link === "Home") {
      this.router.navigate(["home"])
    }
    else if (link === "Active Research") {
      this.router.navigate(["all_research"])
    }
    else if (link === "Members") {
      this.router.navigate(["members"])
    }
  }

}
