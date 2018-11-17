import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerOpen = false;

  constructor() { }

  ngOnInit() {
  }

  openHeader() {
    this.headerOpen = true;
  }

  closeHeader() {
    this.headerOpen = false;
  }

}

