import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.model';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent {

  /*
   --> To fetch some data from the URL Angular provide one 
            Built-in Service which ActivatedRouter.
  
   -->  ActivatedRouter :-  ActivatedRouter is built-in service of RouterModule which
            reterive the data from URL bar.

   -->   We need to inject that service into current using costructor.
   --> We declare object as private to access it outside a constructor.

  */
    empId!:number
    emp!:Employee

    // Dependance Injection
   constructor(private route:ActivatedRoute,private empservice:EmpService){ }
  

   ngOnInit(): void{
      
    let id = this.route.snapshot.paramMap.get('id')!

    
    if(id!=null)
    {
      this.empId = eval(id)
      this.emp = this.empservice.get(this.empId)!
    }

   }

}
