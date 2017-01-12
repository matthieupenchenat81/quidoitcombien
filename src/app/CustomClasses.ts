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
        return `${this._amount} à ${this._participant}`;
    }

    toStringForResume() {

        let response,
        amoutRounded = Math.round(this._amount*100)/100;
        if(this._amount === 0) {
            response = `${this._participant} ne doit plus rien`;
        } else if(this._amount > 0) {
            response = `${this._participant} doit donner ${amoutRounded}€`;
        } else {
            response = `${this._participant} doit recevoir ${-amoutRounded}€`;
        }
        return response;
    }
}

export class ParticipantDebts {
    constructor(private _participant : String, private _debts : Array<Debt>) {}

    get participant() {
        return this._participant;
    }

    set participant(participant) {
        this._participant = participant;
    }

    get debts() {
        return this._debts;
    }

    set debts(debts) {
        this._debts = debts;
    }

    toString() {
        return `${this.participant} doit donner : \n${this.debts}\n\n`;
    }

}