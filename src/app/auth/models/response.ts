export interface IResponse {
    data: any;
    title:string;
    isSuccess: boolean;
    messageId: number;
    messageEn: string | null;
    message: string | null;
  }