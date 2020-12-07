import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../model/User';
import { async } from '@angular/core/testing';
import { LocalsService } from './../service/local/locals.service';
import { Observable } from 'rxjs';
import { TokenService } from './../service/token.service';
import { Component, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.css']
})
export class LocalListComponent implements OnInit {
  listLocal :  Observable<Local[]>;


id:number;
  constructor(private tokenStorage : TokenService,private lc : LocalsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
this.afficherListLocal();
  }
  afficherListLocal()
  {
this.listLocal=this.lc.getLocalUser(this.tokenStorage.getUser().id) ;
  }
  deleteLocal(id: number) {
    this.lc.deleteLocal(id)
      .subscribe(
        data => {
          console.log(data);
         // this.reloadData();
confirm("tfasakh weldik");

        },
        error => console.log(error));
  }

}
