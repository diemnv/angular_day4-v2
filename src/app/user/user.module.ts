import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RfProfileComponent } from './rf-profile/rf-profile.component' ;
import { RfProfileComponent2 } from './rf-profile/rf-profile.component-bk';

@NgModule({
  declarations:
   [ProfileComponent,
    RfProfileComponent,RfProfileComponent2],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [
    ProfileComponent,
    RfProfileComponent,
    RfProfileComponent2
  ]
})
export class UserModule { }
