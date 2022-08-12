export class Product {
    creationDate: string;
    accountNo: string[];
 
   chargedDate:string;
   status:string;
   investedAmount:number;
   accumulatedAmount:number;
   currentValue:number
   constructor(creationDate: string,accountNo:string[],chargedDate:string,status:string,investedAmount:number,accumulatedAmount:number, currentValue:number){
       this. creationDate= creationDate;
       this.accountNo= accountNo;
       this.chargedDate=chargedDate;
       this.status=status;
       this.investedAmount=investedAmount;
       this.accumulatedAmount=accumulatedAmount;
       this.currentValue=currentValue;


   }
    

}
