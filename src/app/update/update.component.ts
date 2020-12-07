import { Local } from './../model/Local';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalsService } from './../service/local/locals.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  detailForm :FormGroup;
  local =new Local();

  constructor(private sc :LocalsService ,private service:ActivatedRoute,private route: Router) { }

  ngOnInit(): void {
    this.detailForm=new FormGroup({
      type : new FormControl('',[Validators.required]),
      address : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z1-9]+$')]),
      prix : new FormControl('',[Validators.required]),
      numero :  new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required]),
      etat : new FormControl('',[Validators.required])

      });
      this.getLocal();

  }

  getLocal()
  {
    this.sc.getLocalDetail(this.service.snapshot.params.id)
.subscribe(data => {
 // console.log(data);
  this.local = data;


}, error => console.log(error));
}

updateLocal() {
  this.local.adresse=this.detailForm.value.adress;
  this.local.description=this.detailForm.value.description;
  this.local.etat=this.detailForm.value.etat;
  this.local.number=this.detailForm.value.numero;
  this.local.prix=this.detailForm.value.prix;

  this.sc.update(this.service.snapshot.params.id, this.local)
    .subscribe(data => {
//      console.log(data);
      this.local = new Local();
     // console.log(this.detailForm.value.address);

    //  this.gotoList();
    }, error => console.log(error));

}
onSubmit() {
  this.updateLocal();
}

gotoList() {
  this.route.navigate(['/listUser']);
}


}
