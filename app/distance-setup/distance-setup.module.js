"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-ui-calendar/angular");
var angular_4 = require("nativescript-ui-chart/angular");
var angular_5 = require("nativescript-ui-dataform/angular");
var angular_6 = require("nativescript-ui-autocomplete/angular");
var angular_7 = require("nativescript-ui-gauge/angular");
var forms_1 = require("nativescript-angular/forms");
var distance_setup_routing_module_1 = require("./distance-setup-routing.module");
var distance_setup_component_1 = require("./distance-setup.component");
var action_button_module_1 = require("../action-button/action-button.module");
var distance_setup_service_1 = require("./distance-setup.service");
var forms_2 = require("@angular/forms");
var DistanceSetupModule = /** @class */ (function () {
    function DistanceSetupModule() {
    }
    DistanceSetupModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUICalendarModule,
                angular_4.NativeScriptUIChartModule,
                angular_5.NativeScriptUIDataFormModule,
                angular_6.NativeScriptUIAutoCompleteTextViewModule,
                angular_7.NativeScriptUIGaugeModule,
                common_1.NativeScriptCommonModule,
                distance_setup_routing_module_1.DistanceSetupRoutingModule,
                forms_1.NativeScriptFormsModule,
                action_button_module_1.ActionButtonModule,
                forms_2.FormsModule
            ],
            declarations: [
                distance_setup_component_1.DistanceSetupComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                distance_setup_service_1.DistanceSetupsService
            ]
        })
    ], DistanceSetupModule);
    return DistanceSetupModule;
}());
exports.DistanceSetupModule = DistanceSetupModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdGFuY2Utc2V0dXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSw4REFBb0Y7QUFDcEYsNERBQWdGO0FBQ2hGLDREQUFnRjtBQUNoRix5REFBMEU7QUFDMUUsNERBQWdGO0FBQ2hGLGdFQUFnRztBQUNoRyx5REFBMEU7QUFDMUUsb0RBQXFFO0FBRXJFLGlGQUE2RTtBQUM3RSx1RUFBb0U7QUFDcEUsOEVBQTJFO0FBQzNFLG1FQUFpRTtBQUNqRSx3Q0FBNkM7QUEyQjdDO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixtQkFBbUI7UUF6Qi9CLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUix3Q0FBOEI7Z0JBQzlCLHNDQUE0QjtnQkFDNUIsc0NBQTRCO2dCQUM1QixtQ0FBeUI7Z0JBQ3pCLHNDQUE0QjtnQkFDNUIsa0RBQXdDO2dCQUN4QyxtQ0FBeUI7Z0JBQ3pCLGlDQUF3QjtnQkFDeEIsMERBQTBCO2dCQUMxQiwrQkFBdUI7Z0JBQ3ZCLHlDQUFrQjtnQkFDbEIsbUJBQVc7YUFDWDtZQUNELFlBQVksRUFBRTtnQkFDYixpREFBc0I7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IsdUJBQWdCO2FBQ2hCO1lBQ0UsU0FBUyxFQUFFO2dCQUNQLDhDQUFxQjthQUN4QjtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7QUFBdkIsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBEaXN0YW5jZVNldHVwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2Rpc3RhbmNlLXNldHVwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBEaXN0YW5jZVNldHVwQ29tcG9uZW50IH0gZnJvbSBcIi4vZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgRGlzdGFuY2VTZXR1cHNTZXJ2aWNlIH0gZnJvbSBcIi4vZGlzdGFuY2Utc2V0dXAuc2VydmljZVwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG5cdFx0RGlzdGFuY2VTZXR1cFJvdXRpbmdNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG5cdFx0QWN0aW9uQnV0dG9uTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdERpc3RhbmNlU2V0dXBDb21wb25lbnRcblx0XSxcblx0c2NoZW1hczogW1xuXHRcdE5PX0VSUk9SU19TQ0hFTUFcblx0XSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGlzdGFuY2VTZXR1cHNTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEaXN0YW5jZVNldHVwTW9kdWxlIHsgfSJdfQ==