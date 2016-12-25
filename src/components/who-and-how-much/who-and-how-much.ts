import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'who-and-how-much',
  templateUrl: './who-and-how-much.html',
  styleUrls: ['./who-and-how-much.css']
})
export class WhoAndHowMuch {
  formGroup: FormGroup;

  constructor(fb: FormBuilder) {
    // this.participantsForm = fb.group({
    //   name: fb
    // });
  }
}
