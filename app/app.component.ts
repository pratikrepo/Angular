import { Component } from '@angular/core';
import {User} from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topichaserror = true;
  topics  = ['Angular','React','Vue'];
  userModel = new User('Name','Email',1234567890,'default','morning',true);
  OnValidate(value){
    if (value === 'default'){
    this.topichaserror = true;}
    else{
      this.topichaserror = false;
    };
   
    }
    onSubmit(){
      console.log(this.userModel);
  }
}
