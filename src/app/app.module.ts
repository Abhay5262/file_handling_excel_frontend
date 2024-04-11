import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import{HttpClient, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExcelFormatComponent } from './component/excel-format/excel-format.component';
import { UploadComponent } from './component/upload/upload.component';
import { ExceldataComponent } from './component/exceldata/exceldata.component';
import { GetdataComponent } from './component/getdata/getdata.component';
import { DataproviderService } from './component/services/dataprovider.service';
import { ImgwithdataComponent } from './imgwithdata/imgwithdata.component';
import { AngularpaginationComponent } from './component/angularpagination/angularpagination.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExcelFormatComponent,
    UploadComponent,
    ExceldataComponent,
    GetdataComponent,
    ImgwithdataComponent,
    AngularpaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    

  ],
  providers: [DataproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
