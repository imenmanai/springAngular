import { User } from './../model/User';
import { TokenService } from './../service/token.service';
import { TransfertService } from './../service/local/transfert.service';
import { FileUploadService } from './../service/local/file-upload.service';
import { Local } from './../model/Local';
import { Component, OnInit } from '@angular/core';
import { LocalsService } from '../service/local/locals.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  currentUser: any;
  us=new User();

local = new Local();
myDate = new Date();
Logo :string;
fileInfos: Observable<any>;
  constructor(private Lc:LocalsService, private route: ActivatedRoute,
    private router: Router, private isLoggedIn:TransfertService,private tokenStorage : TokenService
    ) { }
  ngOnInit(): void {
  }
  usReturn()
  {
this.us.id=this.tokenStorage.getUser().id;
this.us.email=this.tokenStorage.getUser().email;
this.us.prenom=this.tokenStorage.getUser().prenom;
this.us.nom=this.tokenStorage.getUser().nom;
return this.us;
  }

  ajouter()
  {     this.local.dateInsertion=this.myDate;
    /*this.currentUser=this.tokenStorage.getUser();*/
    this.local.user = this.usReturn();
//<this.local.id=this.isLoggedIn.idUser;
    this.Lc.createLocal(this.local).subscribe(data => {
    //  console.log(data);

   // console.log(this.local.user);
    this.local = new Local();
      this.router.navigate(['home']);

    },
    error => console.log(error));
  }
  handleUpload(e):void{
    this.Logo = e.target.value;

 }

  /*
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
*/
}
