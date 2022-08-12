import { Component, OnInit, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from './services/employee.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dream-app';
  modalRef ?: BsModalRef;
  public products:Product[]=[];
  constructor( private router: Router,private modalService : BsModalService,private empService: EmployeeService ) {
  }
  ngOnInit() {
    setTheme('bs4'); 
    this.empService.getProducts().subscribe(data => this.products = data);  
  }
  

  
  
 

}

