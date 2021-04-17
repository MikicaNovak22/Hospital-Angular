

export class Schedule {
    doctor_id: number;
    monday: ScheduleDay;
    tuesday: ScheduleDay;
    wednesday: ScheduleDay;
    thursday: ScheduleDay;
    friday: ScheduleDay;

    constructor(obj?:any) {
        this.doctor_id = obj && obj.doctor_id || null;
        this.monday = obj && new ScheduleDay(obj.monday) || new ScheduleDay();
        this.tuesday = obj && new ScheduleDay(obj.tuesday) || new ScheduleDay();
        this.wednesday = obj && new ScheduleDay(obj.wednesday) || new ScheduleDay();
        this.thursday = obj && new ScheduleDay(obj.thursday) || new ScheduleDay();
        this.friday = obj && new ScheduleDay(obj.friday) || new ScheduleDay();
    }
}


export class ScheduleDay {
    start: string;
    end: string;
    
    constructor(obj?:any) {
        this.start = obj && obj.start || "00:00";
        this.end = obj && obj.end || "00:00";
    }
}