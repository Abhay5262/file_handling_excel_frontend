import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  constructor(private data:HttpClient) {}
  private baseurl="http://localhost:8090/"
  getformat(){
  return  this.data.get(this.baseurl+"excel_sheet", {responseType: "blob"})
  }
  uploaddata(file:any){
    let formParams = new FormData();
   formParams.append('file', file)
   return this.data.post(this.baseurl+"upload_sheet", formParams,{responseType:"text"});
  }
  exceldata(){
    return this.data.get(this.baseurl +"excel_sheet_withdata",{responseType:"blob"});
  }
  getdata(){
    return this.data.get(this.baseurl + "get_exceldata",{responseType:"json"});
  }
  imgwithdata(file:any,data:any){

    let formParams = new FormData();
   formParams.append('file', file);
   formParams.append("data",JSON.stringify(data));
    return this.data.post(this.baseurl+"saveimgdata",formParams,{responseType:"text"});
  }
  getItemsPage(pagenumber: number, pagesize: number): Observable<any> {
   
    return this.data.get<any>(`${this.baseurl}pagination?pagenumber=${pagenumber}&pagesize=${pagesize}`);
  }
}
