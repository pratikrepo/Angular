import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private fb :FormBuilder){}
  
  get userName() {
    return this.registrationForm.get('userName')
  } 
  get email() {
    return this.registrationForm.get('email')
  } 
  registrationForm:FormGroup;
  ngOnInit(){
    this.registrationForm= this.fb.group({
      userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
      email:[''],
      subscribe:[false],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      })
    },{validator: PasswordValidator})

    this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue =>{
      
      if(checkedValue){
        this.registrationForm.get('email').setValidators(Validators.required)
      }
      else {
        this.registrationForm.get('email').clearValidators()
      }
      this.registrationForm.get('email').updateValueAndValidity();
    })
  }
    // registrationForm = new FormGroup({
    //   userName: new FormControl(''),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    //   address:new FormGroup({
    //     city: new FormControl(''),
    //     state: new FormControl(''),
    //     postalCode: new FormControl('')
    //   })

    // });
  loadApiData(){
    this.registrationForm.setValue({
      userName:'Rohit',
      email:'rohit@gmail.com',
      subscribe:true,
      password:'test',
      confirmPassword:'test',
      address:{
        city:'Pune',
        state:'Maharashtra',
        postalCode:'411057'
      }
    })
  }
}
