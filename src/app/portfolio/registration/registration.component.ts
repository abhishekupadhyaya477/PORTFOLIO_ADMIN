import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatDialogModule,CommonModule,MatIconModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
ngOnInit(): void {
  
}
toggleSignUpClass(signUp: boolean): void {
  console.log(signUp);
  
  if(signUp) {
    document.getElementById('container')?.classList.add("right-panel-active")
  }
  else{
    document.getElementById('container')?.classList.remove("right-panel-active")
  }
}
}

