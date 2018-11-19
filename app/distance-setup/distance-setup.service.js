"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var DistanceSetupsService = /** @class */ (function () {
    function DistanceSetupsService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'https://maps.googleapis.com/maps/api/directions/json';
    }
    DistanceSetupsService.prototype.getDistanceSetup = function (origin, dest) {
        var params = new http_1.HttpParams();
        params = params.set('origin', origin)
            .set('destination', dest)
            .set('key', 'AIzaSyBKHMVCsGXT3wzJxO0hCsh_enpT8ZDQZ8c');
        return this.httpClient.get(this.apiUrl, { params: params });
    };
    DistanceSetupsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DistanceSetupsService);
    return DistanceSetupsService;
}());
exports.DistanceSetupsService = DistanceSetupsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc3RhbmNlLXNldHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBd0Y7QUFFeEYsc0NBQTJDO0FBSTNDO0lBRUUsK0JBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFFMUMsV0FBTSxHQUFHLHNEQUFzRCxDQUFDO0lBRmxCLENBQUM7SUFHL0MsZ0RBQWdCLEdBQWhCLFVBQWlCLE1BQU0sRUFBRSxJQUFJO1FBQzNCLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7YUFDbEMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7YUFDeEIsR0FBRyxDQUFDLEtBQUssRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXpELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBZ0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFaVSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FHcUIsaUJBQVU7T0FGL0IscUJBQXFCLENBZWpDO0lBQUQsNEJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IERpc3RhbmNlU2V0dXAgfSBmcm9tICcuL2Rpc3RhbmNlLXNldHVwLm1vZGVscyc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaXN0YW5jZVNldHVwc1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBhcGlVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2RpcmVjdGlvbnMvanNvbic7XHJcbiAgZ2V0RGlzdGFuY2VTZXR1cChvcmlnaW4sIGRlc3QpICB7XHJcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ29yaWdpbicsIG9yaWdpbilcclxuICAgICAgLnNldCgnZGVzdGluYXRpb24nLCBkZXN0KVxyXG4gICAgICAuc2V0KCdrZXknLCAnQUl6YVN5QktITVZDc0dYVDN3ekp4TzBoQ3NoX2VucFQ4WkRRWjhjJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8RGlzdGFuY2VTZXR1cD4odGhpcy5hcGlVcmwsIHtwYXJhbXMgOiBwYXJhbXN9KTtcclxuICB9XHJcblxyXG4gXHJcbn1cclxuIl19