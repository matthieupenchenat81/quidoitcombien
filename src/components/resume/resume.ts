import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session-service';
import { computeMoneyToGive } from '../../services/computeMoney';

import { ParticipantDebts } from '../../app/CustomClasses';

@Component({
  selector: 'resume',
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume {
  participantsDebts : Array<ParticipantDebts>;

  constructor(private router: Router, private sessionService:  SessionService) {
    let puchasesList = this.sessionService.getPurchasesList();
    this.participantsDebts = computeMoneyToGive(puchasesList);
  }
}
