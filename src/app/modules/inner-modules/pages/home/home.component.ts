import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer,SafeUrl,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {
    
   }
  
  ngOnInit(): void {
  }

}
