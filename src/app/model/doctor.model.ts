import { Schedule } from "./schedule.model"

export class DoctorList {
    count: number;
    results: Doctor[];

    constructor(obj?:any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results.map(x => new Doctor(x) || 0)
    }
}

export class Doctor {
    _id: number
    name: string
    lastName: string
    specialty: string
    age: number
    schedule: Schedule

    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || '';
        this.lastName = obj && obj.lastName || '';
        this.specialty = obj && obj.specialty || '';
        this.age = obj && obj.age || 0;
        this.schedule = obj && new Schedule(obj.schedule) || null;
    }
}