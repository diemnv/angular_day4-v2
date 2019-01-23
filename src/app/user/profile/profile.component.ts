import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile = {
    "name": "pham van hao",
    "email": "haopham1@gmail.com",
    "facebook": "haopham",
    "twitter": "haopham",
    "website": "phamhao",
    "telephone": "669065322"
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {

    console.log(form);
  }
}
