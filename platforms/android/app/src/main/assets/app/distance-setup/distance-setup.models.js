"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeocodedWaypoint = /** @class */ (function () {
    function GeocodedWaypoint() {
    }
    return GeocodedWaypoint;
}());
exports.GeocodedWaypoint = GeocodedWaypoint;
var Northeast = /** @class */ (function () {
    function Northeast() {
    }
    return Northeast;
}());
exports.Northeast = Northeast;
var Southwest = /** @class */ (function () {
    function Southwest() {
    }
    return Southwest;
}());
exports.Southwest = Southwest;
var Bounds = /** @class */ (function () {
    function Bounds() {
    }
    return Bounds;
}());
exports.Bounds = Bounds;
var Distance = /** @class */ (function () {
    function Distance() {
    }
    return Distance;
}());
exports.Distance = Distance;
var Duration = /** @class */ (function () {
    function Duration() {
    }
    return Duration;
}());
exports.Duration = Duration;
var EndLocation = /** @class */ (function () {
    function EndLocation() {
    }
    return EndLocation;
}());
exports.EndLocation = EndLocation;
var StartLocation = /** @class */ (function () {
    function StartLocation() {
    }
    return StartLocation;
}());
exports.StartLocation = StartLocation;
var Leg = /** @class */ (function () {
    function Leg() {
    }
    return Leg;
}());
exports.Leg = Leg;
var Route = /** @class */ (function () {
    function Route() {
    }
    return Route;
}());
exports.Route = Route;
var DistanceSetup = /** @class */ (function () {
    function DistanceSetup() {
    }
    return DistanceSetup;
}());
exports.DistanceSetup = DistanceSetup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAubW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdGFuY2Utc2V0dXAubW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQUtBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksNENBQWdCO0FBTzdCO0lBQUE7SUFHQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLDhCQUFTO0FBS3RCO0lBQUE7SUFHQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLDhCQUFTO0FBS3RCO0lBQUE7SUFHQSxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksd0JBQU07QUFLbkI7SUFBQTtJQUdBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSw0QkFBUTtBQUtyQjtJQUFBO0lBR0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLDRCQUFRO0FBS3JCO0lBQUE7SUFHQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLGtDQUFXO0FBS3hCO0lBQUE7SUFHQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLHNDQUFhO0FBSzFCO0lBQUE7SUFPQSxDQUFDO0lBQUQsVUFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksa0JBQUc7QUFTaEI7SUFBQTtJQU9BLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxzQkFBSztBQVNsQjtJQUFBO0lBSUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHZW9jb2RlZFdheXBvaW50IHtcclxuICAgIGdlb2NvZGVyX3N0YXR1czogc3RyaW5nO1xyXG4gICAgcGxhY2VfaWQ6IHN0cmluZztcclxuICAgIHR5cGVzOiBzdHJpbmdbXTtcclxuICAgIHBhcnRpYWxfbWF0Y2g/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm9ydGhlYXN0IHtcclxuICAgIGxhdDogbnVtYmVyO1xyXG4gICAgbG5nOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb3V0aHdlc3Qge1xyXG4gICAgbGF0OiBudW1iZXI7XHJcbiAgICBsbmc6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvdW5kcyB7XHJcbiAgICBub3J0aGVhc3Q6IE5vcnRoZWFzdDtcclxuICAgIHNvdXRod2VzdDogU291dGh3ZXN0O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzdGFuY2Uge1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIER1cmF0aW9uIHtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbmRMb2NhdGlvbiB7XHJcbiAgICBsYXQ6IG51bWJlcjtcclxuICAgIGxuZzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRMb2NhdGlvbiB7XHJcbiAgICBsYXQ6IG51bWJlcjtcclxuICAgIGxuZzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGVnIHtcclxuICAgIGRpc3RhbmNlOiBEaXN0YW5jZTtcclxuICAgIGR1cmF0aW9uOiBEdXJhdGlvbjtcclxuICAgIGVuZF9hZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBlbmRfbG9jYXRpb246IEVuZExvY2F0aW9uO1xyXG4gICAgc3RhcnRfYWRkcmVzczogc3RyaW5nO1xyXG4gICAgc3RhcnRfbG9jYXRpb246IFN0YXJ0TG9jYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZSB7XHJcbiAgICBib3VuZHM6IEJvdW5kcztcclxuICAgIGNvcHlyaWdodHM6IHN0cmluZztcclxuICAgIGxlZ3M6IExlZ1tdO1xyXG4gICAgc3VtbWFyeTogc3RyaW5nO1xyXG4gICAgd2FybmluZ3M6IGFueVtdO1xyXG4gICAgd2F5cG9pbnRfb3JkZXI6IGFueVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzdGFuY2VTZXR1cCB7XHJcbiAgICBnZW9jb2RlZF93YXlwb2ludHM6IEdlb2NvZGVkV2F5cG9pbnRbXTtcclxuICAgIHJvdXRlczogUm91dGVbXTtcclxuICAgIHN0YXR1czogc3RyaW5nO1xyXG59Il19