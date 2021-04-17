export class DayMonthYear {
    day: number;
    month: number;
    year: number;

    constructor(obj?:any) {
        this.day = obj && obj.day || null;
        this.month = obj && obj.month || null;
        this.year = obj && obj.year || null;
    }
}

export class HourMinute {
    hour: number;
    minute: number;
    
    constructor(obj?:any) {
        this.hour = obj && obj.hour || null;
        this.minute = obj && obj.minute || null;
    }
}