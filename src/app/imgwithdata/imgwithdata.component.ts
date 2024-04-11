import { Component } from '@angular/core';
import { DataproviderService } from '../component/services/dataprovider.service';

@Component({
  selector: 'app-imgwithdata',
  templateUrl: './imgwithdata.component.html',
  styleUrls: ['./imgwithdata.component.css']
})
export class ImgwithdataComponent {
  constructor(private data:DataproviderService){}
  file:any
  upload(data:any){
    // if (this.file) {
      this.data.imgwithdata(this.file,data).subscribe(resp => {
        alert(resp)
      })
    // } else {
    //   alert("Please select a file first")
    // }
  }
  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
}
