import { Component, OnInit, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dream-app';
  modalRef ?: BsModalRef;
  constructor(private empService: EmployeeService, private router: Router,private modalService : BsModalService ) {
    this.empService = empService;
  }
  ngOnInit() {
    setTheme('bs4');
  }
  
  
  menu: any[] = [{
    'name': 'Home',
    'url': '/list'
  }, { 'name': 'About', 'url': '' },
  { 'name': 'Services', 'url': '' },
  { 'name': 'Contact', 'url': '' },
  { 'name': 'Components', 'url': '/components' }


  ];
  onLogin(){
    this.router.navigateByUrl('/login');
    this.modalRef?.hide()
  }

  localStorageEmpty(): boolean {
    if (localStorage.length > 0) {
      return false;
    }
    else {
      return true;
    }
  }
  onLogout() {
    this.router.navigateByUrl('/');
    localStorage.clear();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

