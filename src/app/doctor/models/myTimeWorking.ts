export interface ITimePeriod {
  id?: number;
  timeFrom: string;
  timeTo: string;
}

export interface ITurnBody {
  workingTimeId: number;
  workingTimeHoursId: number;
  dateFrom: string;
  dateTo: string;
  count: number;
  mins: number;
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