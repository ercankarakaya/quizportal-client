import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer) { 

      this.svgIcons();
  }

  ngOnInit(): void {
  }

  public svgIcons(){
    this.matIconRegistry.addSvgIcon(
      "home-svg",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/svg/home.svg"));

      this.matIconRegistry.addSvgIcon(
        "user-profile-svg",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/svg/user-profile.svg"));
  }

}
