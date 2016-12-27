import { Purchase, ParticipantDebts, Debt } from '../app/CustomClasses';

export function computeMoneyToGive(purchaseList : Array<Purchase>) : Array<ParticipantDebts> {
    
    let resume = new Array<ParticipantDebts>(),
    size = purchaseList.length;

    for (let purchase of purchaseList) {
        let debts = new Array<Debt>();
        
        for(let debt of purchaseList) {
            if(debt.participant !== purchase.participant) {
                let debtObj = new Debt(debt.participant, Math.round((debt.amount/size)*100)/100);
                debts.push(debtObj);
            }
        }
        resume.push(new ParticipantDebts(purchase.participant, debts));
    }

    return resume;
}