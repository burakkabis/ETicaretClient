// import { Inject, Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class HttpClientService {

//   constructor(private httpClient:HttpClient,@Inject("baseUrl") private baseUrl:string) { }

//   private url(requestParameter:Partial<RequestParameters>):string{
//     return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ?  `/${requestParameter.action}`:""}`;

//   }

//   get<T> (requestParameter:Partial<RequestParameters>,id?:string):Observable<T>{

//     let url:string =""
//     if(requestParameter.fullEndPoint)
//       url=requestParameter.fullEndPoint;
//     else
//       url=`${this.url(requestParameter)}${id ? `/${id}:`: ""}`
  
//     return this.httpClient.get<T>(url,{headers:requestParameter.headers})

// }

// post<T>(requestParameter:Partial<RequestParameters>,body:Partial<T>):Observable<T>{
//   let url:string="";
//   if(requestParameter.fullEndPoint)
//     url=requestParameter.fullEndPoint;
//   else
//     url=`${this.url(requestParameter)}`

//   return this.httpClient.post<T>(url,body,{headers:requestParameter.headers})

// }
  

// put <T>(requestParameter:Partial<RequestParameters>,body:Partial<T>):Observable<T>{

//   let url:string ="";
//   if(requestParameter.fullEndPoint)
//     url=requestParameter.fullEndPoint;
//   else
//     url=`${this.url(requestParameter)}`

//     return this.httpClient.put<T>(url,body,{headers:requestParameter.headers})
// }

// delete<T>(requestParameter:Partial<RequestParameters>,id:string):Observable<T>{
//   let url:string=""
//   if(requestParameter.fullEndPoint)
//     url=requestParameter.fullEndPoint
//   else
//     url=`${this.url(requestParameter)}/${id}`
//   return this.httpClient.delete<T>(url,{headers:requestParameter.headers})
//   }

// }

// export class RequestParameters{

//   controller? :string;
//   action? : string;
//   headers?:HttpHeaders;
//   baseUrl?:string;
//   fullEndPoint?:string;

// }



import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  //@Inject("baseUrl") private baseUrl: string   app.module.ts teki provide da bulunan baseUrl kismini alir.
  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  //Eger requestParameter dan geliyorsa baseUrl biz ozel olarak baska bir baseUrl e istek yapiyoruzdur.
  //Eger oyle bir deger vermediysek direkt uygulamanin baseurl ini kullanir.
  private url(requestParameter: Partial<RequestParameters>): string {
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
  }

  //Id tum yapilanmalarda olmadigi icin requestParameters nesnesine yazmdik,paramatrik olarak yazdik.Bu yuzden id,body gibi veriye ozel degerler ilgili fonksiyondan alinir.
  get<T>(requestParameter: Partial<RequestParameters>, id?: string): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}${id ? `/${id}` : ""}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;

    return this.httpClient.get<T>(url, { headers: requestParameter.headers/*, responseType: requestParameter.responseType as 'json'*/ });
  }

  post<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`

    return this.httpClient.post<T>(url, body, { headers: requestParameter.headers/*, responseType: requestParameter.responseType as 'json'*/ });
  }

  put<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;

    return this.httpClient.put<T>(url, body, { headers: requestParameter.headers/*, responseType: requestParameter.responseType as 'json'*/ });
  }

  delete<T>(requestParameter: Partial<RequestParameters>, id: string): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}/${id}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;

    return this.httpClient.delete<T>(url, { headers: requestParameter.headers/*, responseType: requestParameter.responseType as 'json'*/ });
  }
}


export class RequestParameters {
  controller?: string;
  action?: string;
  queryString?: string;

  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;

 // responseType?: string = 'json';
}