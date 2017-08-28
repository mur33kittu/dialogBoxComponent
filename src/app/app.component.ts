import { Component } from '@angular/core';
import { dialogBoxService} from './dialogBox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  private title : string = 'dialogBox';
  private displayDialog: boolean;
  private header : string;
  private messagebody : string;
  
  constructor(private dialogBoxservice : dialogBoxService){
    this.header = "Header Content from Component"
    this.messagebody = "Message body from App Component"
  }
  private showDialog() : void {  
    this.dialogBoxservice.showDialog(this.header ,this.messagebody);
  }
}