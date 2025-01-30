export class Bilance {
    currentBalance: number;
    income: number;
    expenses: number;
    
  
    constructor(obj?: any) {
      this.currentBalance = obj ? obj.currentBalance : '';
      this.income = obj ? obj.income : '';
      this.expenses = obj ? obj.expenses : '';      
    }
  
    toJSON(): any {
      return {
        currentBalance: this.currentBalance,
        income: this.income,
        expenses: this.expenses
      };
    }
  }
  