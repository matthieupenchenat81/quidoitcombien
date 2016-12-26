import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ParticipantsList } from '../components/participants-list/participants-list';
import { WhoAndHowMuch } from '../components/who-and-how-much/who-and-how-much';

import { SessionService } from '../services/session-service';

const appRoutes: Routes = [
  { path: 'participants', component: ParticipantsList },
  { path: 'quiEtCombien',      component: WhoAndHowMuch },
  { path: '', redirectTo: 'participants', pathMatch: 'full'}
  // { path: '/bilan',      component: Results },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, ParticipantsList, WhoAndHowMuch
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
