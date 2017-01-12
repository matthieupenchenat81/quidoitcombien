import { Purchase, ParticipantDebts, Debt } from '../app/CustomClasses';

export function computeAllDebts(purchasesList : Array<Purchase>) : Array<Debt> {
    
    let debtsList = new Array<Debt>(),
    averageParticipationAmount = getAverageParticipationAmount(purchasesList);
    purchasesList.forEach(function(purchase : Purchase) {
        debtsList.push(new Debt(purchase.participant, averageParticipationAmount - purchase.amount));
    });

    return debtsList;
}

export function getAverageParticipationAmount(purchasesList : Array<Purchase>) : number {
    
    // total participation amount
    let sum = purchasesList.reduce(function(sum, currentPurchase) : any {
        return sum + currentPurchase.amount;
    }, 0);

    // average participation amount
    let numberOfParticipants = purchasesList.length,
    averageParticipationAmount = sum / numberOfParticipants;

    return averageParticipationAmount;
}
