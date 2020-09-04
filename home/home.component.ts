import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { consoleTestResultHandler } from 'tslint/lib/test';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title = 'HomePage';
 

  ngOnInit(): void {
  }

 
}
