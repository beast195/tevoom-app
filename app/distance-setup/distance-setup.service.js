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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc3RhbmNlLXNldHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBd0Y7QUFFeEYsc0NBQTJDO0FBSTNDO0lBRUUsK0JBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFFMUMsV0FBTSxHQUFHLHNEQUFzRCxDQUFDO0lBRmxCLENBQUM7SUFJL0MsZ0RBQWdCLEdBQWhCLFVBQWlCLE1BQU0sRUFBRSxJQUFJO1FBRTNCLElBQUksTUFBTSxHQUFHLElBQUksaUJBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7YUFDbEMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7YUFDeEIsR0FBRyxDQUFDLEtBQUssRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXpELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBZ0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFkVSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FHcUIsaUJBQVU7T0FGL0IscUJBQXFCLENBaUJqQztJQUFELDRCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBEaXN0YW5jZVNldHVwIH0gZnJvbSAnLi9kaXN0YW5jZS1zZXR1cC5tb2RlbHMnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlzdGFuY2VTZXR1cHNTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgYXBpVXJsID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9kaXJlY3Rpb25zL2pzb24nO1xyXG5cclxuICBnZXREaXN0YW5jZVNldHVwKG9yaWdpbiwgZGVzdCkgIHtcclxuICAgIFxyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdvcmlnaW4nLCBvcmlnaW4pXHJcbiAgICAgIC5zZXQoJ2Rlc3RpbmF0aW9uJywgZGVzdClcclxuICAgICAgLnNldCgna2V5JywgJ0FJemFTeUJLSE1WQ3NHWFQzd3pKeE8waENzaF9lbnBUOFpEUVo4YycpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PERpc3RhbmNlU2V0dXA+KHRoaXMuYXBpVXJsLCB7cGFyYW1zIDogcGFyYW1zfSk7XHJcbiAgfVxyXG5cclxuIFxyXG59XHJcbiJdfQ==