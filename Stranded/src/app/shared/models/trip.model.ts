export class TripModel {
    id: number;
    seats: number;
    to: string;
    from: string;
    name: string;
    gender: string;
    age: number;
    start_time: string;
    status: string;
    type: string;
    seats_taken: number;

    // locally computed
    start_date: Date;
    end_date: Date;
}
