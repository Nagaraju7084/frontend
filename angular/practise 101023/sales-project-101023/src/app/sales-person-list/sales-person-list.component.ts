import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';


@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent{

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("anup","kumar","anu@gmail.com",50000),
    new SalesPerson("john","deo","john@gmail.com",40000),
    new SalesPerson("clary","morphi","clary@gmail.com",90000),
    new SalesPerson("mai","tunge","mai@gmail.com",60000)
  ];

}
