import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.css']
})
export class EmpCardComponent {


  /* @Input() decorator is used to take specified object data from it parent component
  */

 @Input() emp!:Employee


//here we taking value from child component and pass emitter object, after 
//                                                                                                                             emitter object shared that value with parent
 @Output() getid = new EventEmitter<number>()
  router: any;


 showId(id:number){
  this.getid.emit(id)
 }

//   Router is also built in service which navigate the component internally...
 constructor(private empservice:EmpService,  private route:Router) {
  console.log("I am card constructor")
 }

 deleteemp(id:number){
  this.empservice.delete(id)
  alert("Employeee Delete Scessfully....")
  this.route.navigate(['/list'])

 }

}