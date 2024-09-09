// reservation.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private selectedTurn: any = null;
  private depositAmount: string = '';
  private reserveAmount: string = '';

  setSelectedTurn(turn: any): void {
    this.selectedTurn = turn;
  }

  getSelectedTurn(): any {
    return this.selectedTurn;
  }

  setDepositAmount(amount: string): void {
    this.depositAmount = amount;
  }

  getDepositAmount(): string {
    return this.depositAmount;
  }

  setReserveAmount(amount: string): void {
    this.reserveAmount = amount;
  }

  getReserveAmount(): string {
    return this.reserveAmount;
  }
}
