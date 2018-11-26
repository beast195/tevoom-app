"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("./backend.service");
var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.register = function (user) {
        return new Promise(function (resolve, reject) {
        });
    };
    LoginService.prototype.login = function (user) {
        return new Promise(function (resolve, reject) {
        });
    };
    LoginService.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MscURBQW1EO0FBR25EO0lBQ0k7SUFFQSxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQVU7UUFDZixNQUFNLENBQUMsSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUczQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNaLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBRTNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDSSxnQ0FBYyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQXBCUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQXFCeEI7SUFBRCxtQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPE9iamVjdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dpbih1c2VyOiBVc2VyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxPYmplY3Q+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJcIjtcbiAgICB9XG59Il19