import { Component } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  standalone: true,
  imports: [],
  templateUrl: './message-modal.component.html',
  styleUrl: './message-modal.component.css'
})
export class MessageModalComponent {
  public message: string = "";
  public title: string = "Error";
  public messageIcon: string = "";
  public btnTitle: string = "CLOSE";
  public dismissCallback: Function = () => {};
  btnClass: string = "";
  constructor(){}
  dismiss(type = false) {
    if (this.dismissCallback) {
      this.dismissCallback(type);
    }
    // this.dialogRef.close();
  }
}
