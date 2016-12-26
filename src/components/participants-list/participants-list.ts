import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'participants-list',
  templateUrl: './participants-list.html',
  styleUrls: ['./participants-list.css']
})
export class ParticipantsList {
  participants : Array<string>;
  nameCtrl: FormControl;
  participantsForm: FormGroup;

  constructor(private router: Router, fb: FormBuilder) {
    this.participants = new Array();
    this.nameCtrl = fb.control('');
    this.participantsForm = fb.group({
      name: this.nameCtrl
    });
  }

  register() {
      if(this.participants.length >= 2) {
          console.log('register');
          console.log(this.participants);
          this.router.navigate(['quiEtCombien']);
      }
  }

  addParticipant() {
      let name = this.participantsForm.value.name;
      if(name !== '') {
        this.participants.push(name);
        this.nameCtrl.setValue('');
      }
  }

  deleteParticipant(index) {
      this.participants.splice(index, 1);
  }
}
