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

    return simplify(resume);
}

function simplify(participantsDebts : Array<ParticipantDebts>) : Array<ParticipantDebts> {

    let simplifiedParticipantsDebts = new Array<ParticipantDebts>();
    for(let participantDebts of participantsDebts) {
        let debts = new Array<Debt>();

        for(let debt of participantDebts.debts) {
            debt.participant

            let participantDebtsToCompare = participantsDebts.find(function(_participantDebts) {
                return (_participantDebts.participant === debt.participant);
            });
            let debtToCompare = participantDebtsToCompare.debts.find(function(debt) {
                return (debt.participant === participantDebts.participant);
            });
            if(debt.amount >= debtToCompare.amount) {
                let newAmount = Math.round((debt.amount - debtToCompare.amount)*100)/100;
                debts.push(new Debt(debt.participant, newAmount));
            }
        }
        simplifiedParticipantsDebts.push(new ParticipantDebts(participantDebts.participant, debts));
    }

    return simplifiedParticipantsDebts;
}

export function getParticipation(participantPurchase : Purchase, participantsDebts : Array<ParticipantDebts>) : number {

    // 1- we retrieve participation amout of selected participant
    let participationAmout = participantPurchase.amount;

    // 2- for each participantsDebts (except the one of selected participant), 
    // add to the amount all debts concerning selected participant
    participantsDebts.forEach(function(participantDebts) {
        participantDebts.debts.forEach(function(debt) {
            if(debt.participant === participantPurchase.participant) participationAmout -= debt.amount;
        });
    });

    return participationAmout;
}