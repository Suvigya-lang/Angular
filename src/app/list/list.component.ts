import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Product } from '../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }
 products : Product[]= this.employeeService.getProducts();

}
