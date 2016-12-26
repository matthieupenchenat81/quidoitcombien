import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session-service';

@Component({
  selector: 'participants-list',
  templateUrl: './participants-list.html',
  styleUrls: ['./participants-list.css']
})
export class ParticipantsList {
  participants : Array<string>;
  nameCtrl: FormControl;
  participantsForm: FormGroup;

  constructor(private router: Router, fb: FormBuilder, private sessionService:  SessionService) {
    this.participants = new Array<string>();
    this.nameCtrl = fb.control('');
    this.participantsForm = fb.group({
      name: this.nameCtrl
    });
  }

  register() {
      if(this.participants.length >= 2) {
          this.sessionService.setParticipants(this.participants);
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
