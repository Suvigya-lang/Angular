import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,TemplateRef,OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product';
import { EmployeeService } from '../services/employee.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
  
  acNo: string="";
  modalRef?: BsModalRef;
  data1: any = []
  products: any = []
  product: any = {}
 accNumber: string = "";
 acNumber: string[]=[];
  constructor(private empService: EmployeeService,private modalService : BsModalService,private router: Router) {
    
   }

  ngOnInit(): void {
    this.getData()
    // this.empService.getProducts().subscribe(data =>
    //    this.products = data);
    //    console.log(this.products);
    console.log(this.user)
  }
  getData() {
    this.empService.getProducts().subscribe((data:any) => {
      //this.data1 = data;
      console.log(data,'data');
      
      data.forEach((element :any) => {
        this.products.push(element)
      });
      console.log(this.data1,'ii');
      this.product = this.products[0]
      this.accNumber =this.products[0].accountNo[0];
      this.acNumber=this.products[0].accountNo;
      this.acNo=this.accNumber;
    })
   
    
  }

//   ngOnChanges(changes: SimpleChanges) {
//       console.log(this.products);
      
// }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
changeAccount(){
  this.accNumber=this.acNo;
  this.modalRef?.hide();
 }
 user :User=this.empService.checkUser();
 userAdmin():boolean{
  if (this.user.role=="user"){
    return true;
  }
  else {
    return false;
  }
 }
 return(){
  this.router.navigateByUrl('');
 }
}
