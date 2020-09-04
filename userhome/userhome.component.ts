import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { consoleTestResultHandler } from 'tslint/lib/test';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent  implements OnInit { 
  public list: any =[];

  constructor(private fb: FormBuilder, private http: HttpClient){}

  public  ngOnInit() {
    this.showqoute();
  }


  public fbFormGroup = this.fb.group({
    id:['',Validators.required],
    qoute: ['',Validators.required],
  });

     
  

     addqoute= async () => {
      
      const url = 'http://localhost:3000/addqoute';
      const data = this.fbFormGroup.value;
      console.log(data);
      const result: any = await this.http.post(url, data).toPromise();
      console.log(result);
      
  }


  
  
   showqoute = async () => {
     console.log("data");
    const url = 'http://localhost:3000/showqoute';
    let results = await this.http.get(url).toPromise();
    this.list = results;
    console.log(results);
    }
}

