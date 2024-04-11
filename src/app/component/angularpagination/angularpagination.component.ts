import { Component, ViewChild } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-angularpagination',
  templateUrl: './angularpagination.component.html',
  styleUrls: ['./angularpagination.component.css']
})
export class AngularpaginationComponent {
  datasource:any;
displaycolumns:string[]=['sr_no','order_no','sale','orderquantity']
@ViewChild(MatPaginator) paignation!:MatPaginator;
  userlist: any;
 
 
constructor(private api:DataproviderService)
{
  this.getalldata();
}
getalldata()
{
  this.api.getdata().subscribe((data)=>
  {
    this.userlist=data
    console.log('get all data',data);
    this.datasource=new MatTableDataSource<any>(this.userlist);
    console.log("Data Source--->" , this.datasource)
    this.datasource.paginator=this.paignation  
  }
)
}
}
