import { Component, OnInit } from '@angular/core';
import { svgIconUrls } from 'src/app/utils/helper';
import { IconUtil } from 'src/app/utils/icon.util';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  
  /** variables */

  constructor(
    private iconUtils:IconUtil
  ) {
    this.getSvgIcons();
  }

  ngOnInit(): void {}

  getSvgIcons() {
    this.iconUtils.addSvgIcons('home',svgIconUrls.HOME);
    this.iconUtils.addSvgIcons('user-profile',svgIconUrls.USER_PROFILE);
    this.iconUtils.addSvgIcons('categories',svgIconUrls.CATEGORY);
    this.iconUtils.addSvgIcons('category-add',svgIconUrls.CATEGORY_ADD);
    this.iconUtils.addSvgIcons('quiz',svgIconUrls.QUIZ);
    this.iconUtils.addSvgIcons('quiz-add',svgIconUrls.QUIZ_ADD);

  }
}
