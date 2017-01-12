/* tslint:disable:no-unused-variable */

import { async } from '@angular/core/testing';
import { computeAllDebts } from './computeAllDebts';

import { Purchase, ParticipantDebts, Debt } from '../app/CustomClasses';

describe('ComputeAllDebts Service', () => {
  
  it('test computeAllDebts function', async(() => {
    
    let purchaseList = new Array<Purchase>();
    purchaseList.push(new Purchase("B", 10));
    purchaseList.push(new Purchase("A", 10));
    purchaseList.push(new Purchase("R", 5));
    purchaseList.push(new Purchase("M", 6));

    let res = `-2.25 à B,-2.25 à A,2.75 à R,1.75 à M`;

    expect(computeAllDebts(purchaseList).toString()).toEqual(res);
  }));
});
