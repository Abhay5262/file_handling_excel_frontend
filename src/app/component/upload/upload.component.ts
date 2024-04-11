import { Component } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  constructor(private data:DataproviderService){}
  file:any
  upload(){
    if (this.file) {
      this.data.uploaddata(this.file).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }
  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
}
