import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private empService: EmployeeService) { }
   id: Number=0;
   products : Product[]= this.empService.getProducts();
   product: any;

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    this.product=this.getProduct();  
    
  }
  getProduct() : Product{
    for(let product of this.products){

      if(product.id===this.id){
        return product;
      }
    }
    return new Product(4,0,"","","")};
  

}
