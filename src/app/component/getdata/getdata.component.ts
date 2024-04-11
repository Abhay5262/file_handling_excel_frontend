import { Component, OnInit } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  constructor(private data:DataproviderService){}
  
  //for get data in table
  Student:any=''
  getall(){
    this.data.getdata().subscribe(
      (res: any)=>{
        console.log('Get all data response: ', res);
        this.Student=res;
      }
      ) 
    }
    
    //for get data in pagination 
    items: any;
    currentPage : number = 0;
    pageSize = 10;
  ngOnInit(): void {
    this.loadItems();
  }
  loadItems(): void {
    this.data.getItemsPage(this.currentPage, this.pageSize)
      .subscribe((res:any)=>{
        console.log("Load Items Page Response", res);
        this.items=res
      });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadItems();
  }
}
