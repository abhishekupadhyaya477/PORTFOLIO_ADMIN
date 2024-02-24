import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatDialogModule,CommonModule,MatIconModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  hide=true;
  registrationForm: FormGroup=new FormGroup(
    {
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    }
  );
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
register(){
  console.log(this.registrationForm.value);
}
}

