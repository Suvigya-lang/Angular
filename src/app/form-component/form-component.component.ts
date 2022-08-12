import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    

  }
  
  
  angform = new FormGroup({
    id: new FormControl('', Validators.required),
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required])
  });
  get firstName(): any {
    return this.angform.get('firstName');
  }
  get lastName(): any {
    return this.angform.get('lastName');
  }
  get id(): any {
    return this.angform.get('id');
  }
  get age(): any {
    return this.angform.get('age');
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
