export class Purchase {
    constructor(private _participant : String, private _amount : number) {}

    get participant() {
        return this._participant;
    }

    set participant(participant) {
        this._participant = participant;
    }

    get amount() {
        return this._amount;
    }

    set amount(amount) {
        this._amount = amount;
    }
}

export class Debt {
    constructor(private _participant : String, private _amount : number) {}

    get participant() {
        return this._participant;
    }

    set participant(participant) {
        this._participant = participant;
    }

    get amount() {
        return this._amount;
    }

    set amount(amount) {
        this._amount = amount;
    }

    toString() {
        return `${this._amount} à donner à ${this._participant}`;
    }
}

export class ParticipantDebts {
    constructor(private participant : String, private debts : Array<Debt>) {}

    toString() {
        return `Participant : ${this.participant} : \n
        dette : ${this.debts}
        `;
    }

}