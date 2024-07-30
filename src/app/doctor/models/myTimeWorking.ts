export interface ITimePeriod {
    id?: number; 
    timeFrom: string;
    timeTo: string;
  }

export interface IMyWorkingTimes {
    dayId: number;
    dayTitle: string;
    id: number;
    timePeriods: ITimePeriod[];
}


export interface ISetMyWorkingTimes {
    dayId: number;
    timePeriods: ITimePeriod[];
}
