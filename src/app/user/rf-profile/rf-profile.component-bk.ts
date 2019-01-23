import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
function emailValidator (e : AbstractControl) : ValidationErrors | null {
  const {value} = e;

  if(!value){
    return {
      required : true
    };
  }
  const result = Validators.email(e);
  if(result){
    //console.log(result);
    return result;
  }
  if(value.endsWith("@gmail.com")){
    return null;
  }
  return {
    gmailInvalidator : true
  };
}
@Component({
  selector: 'app-rf-profile',
  templateUrl: './rf-profile.component.html',
  styleUrls: ['./rf-profile.component.scss']
})
export class RfProfileComponent2 implements OnInit {
  profileFRM = new FormGroup({
    username: new FormControl("",[Validators.required, Validators.minLength(5)]),
    email: new FormControl("",[emailValidator]),
    social: new FormGroup({
      facebook: new FormControl("",[Validators.required, Validators.minLength(5)]),
      twitter: new FormControl(),
      website: new FormControl()
    }),
    telephone: new FormControl()
  });

  constructor() {

  }

  ngOnInit() {

    setTimeout(() => {
      this.profileFRM.patchValue({
        username: "hao pham"
      })
    }, 2000);
  }
  onSubmit(form: NgForm) {

    console.log(form);
  }
}

