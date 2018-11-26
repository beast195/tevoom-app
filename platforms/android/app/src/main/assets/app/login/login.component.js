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
        // this.userService.register(this.user)
        // 	.then(status => {
        // 		alert("Your account was successfully created.");
        // 		this.toggleDisplay();
        // 		this.clearFields();
        // 	}, err => {
        // 		this.clearFields();
        // 		alert("Unfortunately we were unable to create your account.")
        // 	});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFDL0Isc0RBQStEO0FBRS9ELG9DQUFzRDtBQVF0RDtJQVFDLHdCQUNTLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsSUFBVSxFQUNWLFdBQXlCO1FBSHpCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQVRsQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQVdsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksYUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQVZELHNDQUFhLEdBQWI7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBVUQsaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsY0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1FBQ1IsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDRixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLG9DQUFvQztRQUNwQyxxQkFBcUI7UUFDckIsMkNBQTJDO1FBQzNDLG1FQUFtRTtRQUNuRSxlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLDREQUE0RDtRQUM1RCxPQUFPO0lBQ1IsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDQyx1Q0FBdUM7UUFDdkMscUJBQXFCO1FBQ3JCLHFEQUFxRDtRQUNyRCwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIsa0VBQWtFO1FBQ2xFLE9BQU87SUFDUixDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQTdEVyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNwQyxDQUFDO3lDQVVnQixlQUFNO1lBQ0kseUJBQWdCO1lBQzVCLFdBQUk7WUFDRyxxQkFBWTtPQVp0QixjQUFjLENBK0QxQjtJQUFELHFCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBzZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IGFsZXJ0LCBMb2dpblNlcnZpY2UsIFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJMb2dpblwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHVzZXI6IFVzZXI7XG5cblx0aXNMb2dnaW5nSW4gPSB0cnVlO1xuXG5cdHRvZ2dsZURpc3BsYXkoKSB7XG5cdFx0dGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuXHR9XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHRcdHByaXZhdGUgcGFnZTogUGFnZSxcblx0XHRwcml2YXRlIHVzZXJTZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0fVxuXG5cdHN1Ym1pdCgpIHtcblx0XHRpZiAoIXRoaXMudXNlci5pc1ZhbGlkRW1haWwoKSkge1xuXHRcdFx0YWxlcnQoXCJFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuXHRcdFx0dGhpcy5sb2dpbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNpZ25VcCgpO1xuXHRcdH1cblx0fVxuXG5cdGxvZ2luKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG5cdFx0Ly8gdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG5cdFx0Ly8gXHQudGhlbihzdGF0dXMgPT4ge1xuXHRcdC8vIFx0XHRzZXRTdHJpbmcoXCJ1c2VyX2lkXCIsIHRoaXMudXNlci5lbWFpbCk7XG5cdFx0Ly8gXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcblx0XHQvLyBcdH0sIGVyciA9PiB7XG5cdFx0Ly8gXHRcdHRoaXMuY2xlYXJGaWVsZHMoKTtcblx0XHQvLyBcdFx0YWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG5cdFx0Ly8gXHR9KTtcblx0fVxuXG5cdHNpZ25VcCgpIHtcblx0XHQvLyB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcblx0XHQvLyBcdC50aGVuKHN0YXR1cyA9PiB7XG5cdFx0Ly8gXHRcdGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG5cdFx0Ly8gXHRcdHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuXHRcdC8vIFx0XHR0aGlzLmNsZWFyRmllbGRzKCk7XG5cdFx0Ly8gXHR9LCBlcnIgPT4ge1xuXHRcdC8vIFx0XHR0aGlzLmNsZWFyRmllbGRzKCk7XG5cdFx0Ly8gXHRcdGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKVxuXHRcdC8vIFx0fSk7XG5cdH1cblxuXHRjbGVhckZpZWxkcygpIHtcblx0XHR0aGlzLnVzZXIuZW1haWwgPSAnJztcblx0XHR0aGlzLnVzZXIucGFzc3dvcmQgPSAnJztcblx0fVxuXG59Il19