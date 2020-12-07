import { ActivatedRoute } from '@angular/router';
import { LocalsService } from './../service/local/locals.service';
import { Component, OnInit } from '@angular/core';
import { Local } from '../model/Local';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
//detailForm :FormGroup;
local =new Local();
  constructor(private sc :LocalsService ,private service:ActivatedRoute) {}

  ngOnInit(): void {
this.sc.getLocalDetail(this.service.snapshot.params.id)
.subscribe(data => {
  console.log(data)
  this.local = data;
}, error => console.log(error));
  }

}
