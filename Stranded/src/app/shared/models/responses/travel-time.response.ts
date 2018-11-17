export class TravelTimeResponse {
    lengthInMeters: number;
    travelTimeInSeconds: number;
    trafficDelayInSeconds: number;
    departureTime: Date;
    arrivalTime: Date;
    noTrafficTravelTimeInSeconds: number;
    historicTrafficTravelTimeInSeconds: number;
    liveTrafficIncidentsTravelTimeInSeconds: number;
}
