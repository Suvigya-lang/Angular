import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string="/assets/Data/product.json";
  private _userUrl:string="assets/Data/employees.json";
  user:User []=[];
  users: User[]=[];
  name: string="";
  password: string="";
  constructor(private http: HttpClient) { 
    this.getUser()
    
  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this._url);
  }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this._userUrl);
  }
  getUser(){
    this.getUsers().subscribe((data:any)=>{
      data.forEach((element:any)=>{this.user.push(element)})
      this.users=this.user;
    })
    console.log(this.users)
  }
  saveUser(name:string, password: string){
    this.name=name;
    this.password=password

  }
  checkUser(): User{
    for(let user of this.users){
      console.log(user);
      if(user.email==this.name&&user.password==this.password)
      
      return user;
    }
    return new User("","","");
  }

  
}
