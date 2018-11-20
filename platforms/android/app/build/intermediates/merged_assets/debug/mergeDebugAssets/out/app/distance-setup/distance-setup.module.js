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
                action_button_module_1.ActionButtonModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdGFuY2Utc2V0dXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSw4REFBb0Y7QUFDcEYsNERBQWdGO0FBQ2hGLDREQUFnRjtBQUNoRix5REFBMEU7QUFDMUUsNERBQWdGO0FBQ2hGLGdFQUFnRztBQUNoRyx5REFBMEU7QUFDMUUsb0RBQXFFO0FBRXJFLGlGQUE2RTtBQUM3RSx1RUFBb0U7QUFDcEUsOEVBQTJFO0FBQzNFLG1FQUFpRTtBQTBCakU7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQXhCL0IsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFO2dCQUNSLHdDQUE4QjtnQkFDOUIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLG1DQUF5QjtnQkFDekIsc0NBQTRCO2dCQUM1QixrREFBd0M7Z0JBQ3hDLG1DQUF5QjtnQkFDekIsaUNBQXdCO2dCQUN4QiwwREFBMEI7Z0JBQzFCLCtCQUF1QjtnQkFDdkIseUNBQWtCO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNiLGlEQUFzQjthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDUix1QkFBZ0I7YUFDaEI7WUFDRSxTQUFTLEVBQUU7Z0JBQ1AsOENBQXFCO2FBQ3hCO1NBQ0osQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztBQUF2QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IERpc3RhbmNlU2V0dXBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZGlzdGFuY2Utc2V0dXAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IERpc3RhbmNlU2V0dXBDb21wb25lbnQgfSBmcm9tIFwiLi9kaXN0YW5jZS1zZXR1cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQgeyBEaXN0YW5jZVNldHVwc1NlcnZpY2UgfSBmcm9tIFwiLi9kaXN0YW5jZS1zZXR1cC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuXHRcdERpc3RhbmNlU2V0dXBSb3V0aW5nTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXHRcdEFjdGlvbkJ1dHRvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHREaXN0YW5jZVNldHVwQ29tcG9uZW50XG5cdF0sXG5cdHNjaGVtYXM6IFtcblx0XHROT19FUlJPUlNfU0NIRU1BXG5cdF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERpc3RhbmNlU2V0dXBzU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRGlzdGFuY2VTZXR1cE1vZHVsZSB7IH0iXX0=