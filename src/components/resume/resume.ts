import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session-service';
import { computeMoneyToGive, getParticipation } from '../../services/computeMoney';

import { ParticipantDebts } from '../../app/CustomClasses';

@Component({
  selector: 'resume',
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume {
  participantsDebts : Array<ParticipantDebts>;
  participationAmout : number;

  constructor(private router: Router, private sessionService:  SessionService) {
    let purchasesList = this.sessionService.getPurchasesList();
    this.participantsDebts = computeMoneyToGive(purchasesList);
    this.participationAmout = getParticipation(purchasesList[0], this.participantsDebts);    
  }
}
