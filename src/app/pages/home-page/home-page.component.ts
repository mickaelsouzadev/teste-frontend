import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

// interface Card {
// 	color: string;
// 	title: string;
// 	text: string;
// }


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

   
   cards = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
  	// this.http.get<Card[]>('http://api.simsave.com.br/v1/test-api/home').subscribe(res=>this.cards=res);;
  	// console.log(this.http.get('http://api.simsave.com.br/v1/test-api/home'));
  	this.http.get('http://api.simsave.com.br/v1/test-api/home').subscribe((data: any[])=>{
      console.log(data);
      this.cards = data;
    })  
  
  }

}
