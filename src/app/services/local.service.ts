import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
myPI =3.14
banks =['sbi','rbi','pnb']
displayBanks(){
  console.log(this.banks)
}
addBank(){
  this.banks.push('rbi')
}
  constructor() { }
}
