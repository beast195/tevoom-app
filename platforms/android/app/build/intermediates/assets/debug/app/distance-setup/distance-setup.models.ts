export class GeocodedWaypoint {
    geocoder_status: string;
    place_id: string;
    types: string[];
    partial_match?: boolean;
}

export class Northeast {
    lat: number;
    lng: number;
}

export class Southwest {
    lat: number;
    lng: number;
}

export class Bounds {
    northeast: Northeast;
    southwest: Southwest;
}

export class Distance {
    text: string;
    value: number;
}

export class Duration {
    text: string;
    value: number;
}

export class EndLocation {
    lat: number;
    lng: number;
}

export class StartLocation {
    lat: number;
    lng: number;
}

export class Leg {
    distance: Distance;
    duration: Duration;
    end_address: string;
    end_location: EndLocation;
    start_address: string;
    start_location: StartLocation;
}

export class Route {
    bounds: Bounds;
    copyrights: string;
    legs: Leg[];
    summary: string;
    warnings: any[];
    waypoint_order: any[];
}

export class DistanceSetup {
    geocoded_waypoints: GeocodedWaypoint[];
    routes: Route[];
    status: string;
}