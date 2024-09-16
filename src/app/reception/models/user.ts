export interface IUser {
    userId: number;
    firstName: string;
    lastName: string;
    roles: string[];
  }


  export interface IUserObj {
    id: number;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    nationalCode: string;
    ibanNumber: string;
    bankCardNumber: string;
    image: string;
    credit: string;
  }


  
  export interface ITodayTurns {
    turnId: number ;
    userId:number ;
    phoneNumber: string ;
    firstName: string ;
    lastName: string ;
    status: number ;
    visitTime: string ;
    depositAmount: string ;
    reserveAmount: string ;
    paymentCode:string ; 
  }


   