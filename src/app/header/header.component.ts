import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header_image = "assets/Logos/DIRECT Lab Logo-C.png"
  links = [
    "Home",
    "Active Research",
    "Members",
    "Outreach Events",
    "Contact Us"
  ]

  @Input() mode = '';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  jump(link: string) {
    if (link === "Home") {
      this.router.navigate(["home"])
    }
    else if (link === "Active Research") {
      this.router.navigate(["all_research"])
    }
    else if (link === "Members") {
      this.router.navigate(["members"])
    }
    else if (link == "Outreach Events") {
      this.router.navigate(["outreach"])
    } else if (link == "Contact Us") {
      this.router.navigate(["contact"])
    }
  }

}
