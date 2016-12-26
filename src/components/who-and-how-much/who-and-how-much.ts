import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { SessionService } from '../../services/session-service';
import { Purchase } from '../../app/Purchase';

@Component({
  selector: 'who-and-how-much',
  templateUrl: './who-and-how-much.html',
  styleUrls: ['./who-and-how-much.css']
})
export class WhoAndHowMuch {
  participants : Array<String>;
  formGroup: FormGroup;

  constructor(fb: FormBuilder, private sessionService : SessionService) {
    this.participants = sessionService.getParticipants();
  }

  register(formData) {

    let purchasesList = [];
    this.participants.forEach(function(participant, i) {
      purchasesList.push(new Purchase(participant, formData[i]));
    });
    this.sessionService.setPurchasesList(purchasesList);
  }
}
