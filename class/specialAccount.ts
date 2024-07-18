import { DioAccount } from './DioAccount';

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  newDeposit = (amount: number): void => {
    const bonus = 10;
    const total = amount + bonus
    super.deposit(total);
    console.log(`Depósito especial de ${amount} + ${bonus}. Saldo atual: ${this.getBalance()}`);
  }
}