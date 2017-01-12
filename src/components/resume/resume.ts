import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session-service';
import { computeAllDebts, getAverageParticipationAmount } from '../../services/computeAllDebts';

import { Debt } from '../../app/CustomClasses';

@Component({
  selector: 'resume',
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume {
  allDebts : Array<Debt>;
  participationAmout : number;

  constructor(private router: Router, private sessionService:  SessionService) {
    let purchasesList = this.sessionService.getPurchasesList();
    this.allDebts = computeAllDebts(purchasesList);
    this.participationAmout = Math.round(getAverageParticipationAmount(purchasesList)*100)/100;    
  }
}
