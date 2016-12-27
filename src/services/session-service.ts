import { Purchase, ParticipantDebts } from '../app/CustomClasses';

export class SessionService {
    _participants : Array<String>; 
    _purchasesList : Array<Purchase>;

    constructor() {
        this._participants = new Array<string>();
        this._purchasesList = new Array<Purchase>();
    }

    getParticipants(): Array<String> {
        return this._participants;
    }

    setParticipants(pParticipants: Array<String>): void {
        this._participants = pParticipants;
    }

    getPurchasesList(): Array<Purchase> {
        return this._purchasesList;
    }

    setPurchasesList(pPurchasesList: Array<Purchase>): void {
        this._purchasesList = pPurchasesList;
    }
}