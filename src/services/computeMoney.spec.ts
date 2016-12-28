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

    let res = `Florent doit donner : 


,Matthieu doit donner : 
1.67 à Florent

,Aurélien doit donner : 
2.34 à Florent,0.67 à Matthieu

`;

    expect(computeMoneyToGive(purchaseList).toString()).toEqual(res);
  }));
});
