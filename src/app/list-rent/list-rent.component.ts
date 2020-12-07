import { Local } from './../model/Local';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-rent',
  templateUrl: './list-rent.component.html',
  styleUrls: ['./list-rent.component.css']
})
export class ListRentComponent implements OnInit {
@Input() local :Local;
@Input() type : string;
  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.type=this.route.snapshot.params.type;
  }

}
