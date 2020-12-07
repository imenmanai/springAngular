import { LocalsService } from './../service/local/locals.service';
import { Component, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
listLocal :  Observable<Local[]>;
type : string;

constructor(private lc :LocalsService) { }

  ngOnInit(): void {
    this.afficherListLocal();
  }
  afficherListLocal()
  {
this.listLocal=this.lc.getLocalList();

  }

}
