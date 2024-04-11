import { Component } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';


@Component({
  selector: 'app-excel-format',
  templateUrl: './excel-format.component.html',
  styleUrls: ['./excel-format.component.css']
})
export class ExcelFormatComponent {
  constructor(private http:DataproviderService){}
  getfile(){
    this.http.getformat().subscribe({
      next: (resp) => {
        const downloadUrl=window.URL.createObjectURL(resp);
        const link=document.createElement('a')
        link.href=downloadUrl;
        link.download="Format.xlsx";
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