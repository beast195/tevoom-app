"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var login_component_1 = require("./login.component");
var shared_1 = require("~/shared");
var login_routing_module_1 = require("./login-routing.module");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.NativeScriptFormsModule,
                common_1.NativeScriptCommonModule,
                login_routing_module_1.LoginRoutingModule
            ],
            declarations: [
                login_component_1.LoginComponent
            ],
            providers: [
                shared_1.LoginService,
                shared_1.BackendService
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSxzQ0FBMkQ7QUFHM0QscURBQW1EO0FBQ25ELG1DQUF3RDtBQUN4RCwrREFBNEQ7QUFpQjVEO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFmdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLCtCQUF1QjtnQkFDdkIsaUNBQXdCO2dCQUN4Qix5Q0FBa0I7YUFDckI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AscUJBQVk7Z0JBQ1osdUJBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDO09BQ1csV0FBVyxDQUFJO0lBQUQsa0JBQUM7Q0FBQSxBQUE1QixJQUE0QjtBQUFmLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgbG9naW5Sb3V0aW5nIH0gZnJvbSBcIi4vbG9naW4ucm91dGluZ1wiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSwgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWRcIjtcbmltcG9ydCB7IExvZ2luUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2xvZ2luLXJvdXRpbmcubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBMb2dpblJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMb2dpbkNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIExvZ2luU2VydmljZSxcbiAgICAgICAgQmFja2VuZFNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7IH1cbiJdfQ==