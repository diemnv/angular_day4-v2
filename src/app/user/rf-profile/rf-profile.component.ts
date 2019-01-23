import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
function emailValidator(e: AbstractControl): ValidationErrors | null {
  const { value } = e;

  if (!value) {
    return {
      required: true
    };
  }
  const result = Validators.email(e);
  if (result) {
    //console.log(result);
    return result;
  }
  if (value.endsWith("@gmail.com")) {
    return null;
  }
  return {
    gmailInvalidator: true
  };
}
@Component({
  selector: 'app-rf-profile',
  templateUrl: './rf-profile.component.html',
  styleUrls: ['./rf-profile.component.scss']
})
export class RfProfileComponent implements OnInit {

  profileFRM: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

    this.profileFRM = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [emailValidator]],
      social: this.fb.group({
        facebook: ["", [Validators.required, Validators.minLength(5)]],
        twitter: [],
        website: []
      }),
      telephone: []
    });

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
