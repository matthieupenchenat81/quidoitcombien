/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { computeMoneyToGive } from './computeMoney';

import { Purchase, ParticipantDebts, Debt } from '../app/CustomClasses';

describe('ComputeMoney Service', () => {
  
  it('test computeMoneyToGive function', async(() => {
    
    let purchaseList = new Array<Purchase>();
    purchaseList.push(new Purchase("Florent", 14));
    purchaseList.push(new Purchase("Matthieu", 9));
    purchaseList.push(new Purchase("Aurélien", 7));

    let res = `Participant : Florent : 

        dette : 3 à donner à Matthieu,2.33 à donner à Aurélien
        ,Participant : Matthieu : 

        dette : 4.67 à donner à Florent,2.33 à donner à Aurélien
        ,Participant : Aurélien : 

        dette : 4.67 à donner à Florent,3 à donner à Matthieu
        `
    expect(computeMoneyToGive(purchaseList).toString()).toEqual(res);
  }));
});
