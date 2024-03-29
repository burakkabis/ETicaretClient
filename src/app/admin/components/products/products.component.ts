import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService){

    super(spinner)
  }

  ngOnInit():void{ 

    // this.showSpinner(SpinnerType.BallAtom)
    // //controller:"products" baska bir sey vermedigim takdirde ana moduldeki(app.module.ts teki provide deki link(baseurl(localhost....)) temsil edilecek.)
    // this.httpClientService.get({
    //   controller:"products"
    // }).subscribe(data => console.log(data))

    // this.httpClientService.post({
    //   controller:"products"

    // },{
    //   name:"Kalem",
    //   stock:100,
    //   price:15
    // }).subscribe();


    // this.httpClientService.post({
    //   controller:"products"

    // },{
    //   name:"Silgi",
    //   stock:220,
    //   price:5
    // }).subscribe();


    // this.httpClientService.post({
    //   controller:"products"

    // },{
    //   name:"Defter",
    //   stock:50,
    //   price:25
    // }).subscribe();

    // this.httpClientService.get({

    //   baseUrl:"https://jsonplaceholder.typicode.com/posts",
    //   controller:"posts"
    // }).subscribe(data=>console.log(data))

  }



  

}
