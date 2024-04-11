import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelFormatComponent } from './component/excel-format/excel-format.component';
import { UploadComponent } from './component/upload/upload.component';
import { ExceldataComponent } from './component/exceldata/exceldata.component';
import { GetdataComponent } from './component/getdata/getdata.component';
import { ImgwithdataComponent } from './imgwithdata/imgwithdata.component';
import { AngularpaginationComponent } from './component/angularpagination/angularpagination.component';


const routes : Routes = [
  {
    path:'excel-format',
    component:ExcelFormatComponent,
    pathMatch:"full"
  },
  {
    path:'upload',
    component:UploadComponent,
    pathMatch:"full"
  },
  {
    path:'exceldata',
    component:ExceldataComponent,
    pathMatch:"full"
  },
  {
    path:'getdata',
    component:GetdataComponent,
    pathMatch:"full"
  },
  {
    path:'imgwithdata',
    component:ImgwithdataComponent,
    pathMatch:"full"
  },
  {
    path:'angularpagination',
    component:AngularpaginationComponent,
    pathMatch:"full"
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
