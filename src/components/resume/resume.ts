import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session-service';

@Component({
  selector: 'resume',
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume {
  participants : Array<string>;

  constructor(private router: Router, private sessionService:  SessionService) {
    this.participants = new Array<string>();
    console.log(this.sessionService.getPurchasesList());
  }
}
