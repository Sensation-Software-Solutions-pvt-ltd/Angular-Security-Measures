import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-sanitizing',
  templateUrl: './sanitizing.component.html',
  styleUrls: ['./sanitizing.component.css']
})
export class SanitizingComponent implements OnInit {
  unTrustedHtml:any='This is just simple <script>alert("Attack") </script>text to display';
  trustedUrlHtml:any;
  hrefUrl='javascript:alert("hello")';
  hrefSafeUrl:any;
  

  constructor(private senitizer:DomSanitizer) { 
debugger
    this.trustedUrlHtml = this.senitizer.sanitize(SecurityContext.HTML,'This is just simple <script>alert("Attack") </script>text to display') 
    this.hrefSafeUrl = this.senitizer.sanitize(0,"javascript:alert('hello')");
    
    
  }

  ngOnInit(): void {
  
  }

}
