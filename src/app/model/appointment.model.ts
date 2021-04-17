import { DayMonthYear, HourMinute } from "./datetime.model";

export class Appointment {
    _id: number;
    doctorId: number;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    day: DayMonthYear;
    hour: HourMinute;

    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.doctorId = obj && obj.doctorId || null;
        this.name = obj && obj.name || "";
        this.lastName = obj && obj.lastName || "";
        this.email = obj && obj.email || "";
        this.phone = obj && obj.phone || "";
        this.day = obj && obj.day || new DayMonthYear;
        this.hour = obj && obj.hour || new HourMinute;
    }
}