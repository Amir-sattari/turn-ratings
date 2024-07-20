export interface IUser {
    userId: number;
    token: string;
    firstName: string;
    lastName: string;
    nationalCode: string;
    roles: IRole[];
  }
  
  export interface IRole {
    id: number;
    title: string;
  }
  