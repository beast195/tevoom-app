"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var router_2 = require("nativescript-angular/router");
var shared_1 = require("../shared");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, routerExtensions, page, userService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new shared_1.User();
    }
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            shared_1.alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
        // this.userService.login(this.user)
        // 	.then(status => {
        // 		setString("user_id", this.user.email);
        // 		this.routerExtensions.navigate(["/"], { clearHistory: true });
        // 	}, err => {
        // 		this.clearFields();
        // 		alert("Unfortunately we could not find your account.");
        // 	});
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .then(function (status) {
            shared_1.alert("Your account was successfully created.");
            _this.toggleDisplay();
            _this.clearFields();
        }, function (err) {
            _this.clearFields();
            shared_1.alert("Unfortunately we were unable to create your account.");
        });
    };
    LoginComponent.prototype.clearFields = function () {
        this.user.email = '';
        this.user.password = '';
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            page_1.Page,
            shared_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFDL0Isc0RBQStEO0FBRS9ELG9DQUFzRDtBQVF0RDtJQVFDLHdCQUNTLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsSUFBVSxFQUNWLFdBQXlCO1FBSHpCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQVRsQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQVdsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksYUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQVZELHNDQUFhLEdBQWI7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBVUQsaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsY0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1FBQ1IsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDRixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLG9DQUFvQztRQUNwQyxxQkFBcUI7UUFDckIsMkNBQTJDO1FBQzNDLG1FQUFtRTtRQUNuRSxlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLDREQUE0RDtRQUM1RCxPQUFPO0lBQ1IsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFVQztRQVRBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNYLGNBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLFVBQUEsR0FBRztZQUNMLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixjQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQTtRQUM5RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBN0RXLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLENBQUM7eUNBVWdCLGVBQU07WUFDSSx5QkFBZ0I7WUFDNUIsV0FBSTtZQUNHLHFCQUFZO09BWnRCLGNBQWMsQ0ErRDFCO0lBQUQscUJBQUM7Q0FBQSxBQS9ERCxJQStEQztBQS9EWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgYWxlcnQsIExvZ2luU2VydmljZSwgVXNlciB9IGZyb20gXCIuLi9zaGFyZWRcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkxvZ2luXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0dXNlcjogVXNlcjtcblxuXHRpc0xvZ2dpbmdJbiA9IHRydWU7XG5cblx0dG9nZ2xlRGlzcGxheSgpIHtcblx0XHR0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG5cdH1cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG5cdFx0cHJpdmF0ZSBwYWdlOiBQYWdlLFxuXHRcdHByaXZhdGUgdXNlclNlcnZpY2U6IExvZ2luU2VydmljZSxcblx0KSB7XG5cdFx0dGhpcy51c2VyID0gbmV3IFVzZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHR9XG5cblx0c3VibWl0KCkge1xuXHRcdGlmICghdGhpcy51c2VyLmlzVmFsaWRFbWFpbCgpKSB7XG5cdFx0XHRhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG5cdFx0XHR0aGlzLmxvZ2luKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2lnblVwKCk7XG5cdFx0fVxuXHR9XG5cblx0bG9naW4oKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcblx0XHQvLyB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcblx0XHQvLyBcdC50aGVuKHN0YXR1cyA9PiB7XG5cdFx0Ly8gXHRcdHNldFN0cmluZyhcInVzZXJfaWRcIiwgdGhpcy51c2VyLmVtYWlsKTtcblx0XHQvLyBcdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuXHRcdC8vIFx0fSwgZXJyID0+IHtcblx0XHQvLyBcdFx0dGhpcy5jbGVhckZpZWxkcygpO1xuXHRcdC8vIFx0XHRhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcblx0XHQvLyBcdH0pO1xuXHR9XG5cblx0c2lnblVwKCkge1xuXHRcdHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuXHRcdFx0LnRoZW4oc3RhdHVzID0+IHtcblx0XHRcdFx0YWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcblx0XHRcdFx0dGhpcy50b2dnbGVEaXNwbGF5KCk7XG5cdFx0XHRcdHRoaXMuY2xlYXJGaWVsZHMoKTtcblx0XHRcdH0sIGVyciA9PiB7XG5cdFx0XHRcdHRoaXMuY2xlYXJGaWVsZHMoKTtcblx0XHRcdFx0YWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsZWFyRmllbGRzKCkge1xuXHRcdHRoaXMudXNlci5lbWFpbCA9ICcnO1xuXHRcdHRoaXMudXNlci5wYXNzd29yZCA9ICcnO1xuXHR9XG5cbn0iXX0=