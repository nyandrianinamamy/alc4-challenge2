import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss'],
})
export class UserContentComponent implements OnInit {
  constructor() {}
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  reason = '';

  ngOnInit() {}

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
