import { Component } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';

@Component({
  selector: 'app-exceldata',
  templateUrl: './exceldata.component.html',
  styleUrls: ['./exceldata.component.css']
})
export class ExceldataComponent {
  constructor(private http:DataproviderService){}
  getexcelfile(){
    this.http.exceldata().subscribe({
      next: (resp) => {
        const downloadUrl=window.URL.createObjectURL(resp);
        const link=document.createElement('a')
        link.href=downloadUrl;
        link.download="excelwithdata.xlsx";
        link.click();
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => { }
    }
    )
    
}
}
