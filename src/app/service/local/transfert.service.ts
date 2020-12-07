import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {
  isLoggedIn :boolean;
  idUser:number;

  constructor() { }

}
