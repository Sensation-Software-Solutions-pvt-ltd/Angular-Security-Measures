import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inner-sidebar',
  templateUrl: './inner-sidebar.component.html',
  styleUrls: ['./inner-sidebar.component.css']
})
export class InnerSidebarComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

}
