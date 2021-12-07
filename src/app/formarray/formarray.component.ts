import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
  userForm !: FormGroup
  userList!: FormArray
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userList: new FormArray([
        // new FormGroup({
        //   'userName': new FormControl(''),
        //   'userDetails': new FormControl(''),
        //   'userNumber': new FormControl('')
        // }),
        // new FormGroup({
        //   'userName': new FormControl(''),
        //   'userDetails': new FormControl(''),
        //   'userNumber': new FormControl('')
        // })
      ]),
    })
  }
  get userFormlist() {
    return this.userForm.get('userList') as FormArray
  }
  // this is function returns a formGroup with collection of formcontrols
  createUserList(): FormGroup {
    return this.fb.group({
      userName: '',
      userDetails: '',
      userNumber: ''
    })
  }
  addUsers(): void {
    this.userList = this.userForm.get('userList') as FormArray
    this.userList.push(this.createUserList())
  }
  button(): void {
    console.log(this.userForm)
  }
}
