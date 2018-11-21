"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdGFuY2Utc2V0dXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFDckUsaUZBQTZFO0FBQzdFLHVFQUFvRTtBQUNwRSw4RUFBMkU7QUFDM0UsbUVBQWlFO0FBQ2pFLHdDQUE2QztBQW9CN0M7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQWxCL0IsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFO2dCQUNSLGlDQUF3QjtnQkFDeEIsMERBQTBCO2dCQUMxQiwrQkFBdUI7Z0JBQ3ZCLHlDQUFrQjtnQkFDbEIsbUJBQVc7YUFDWDtZQUNELFlBQVksRUFBRTtnQkFDYixpREFBc0I7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IsdUJBQWdCO2FBQ2hCO1lBQ0UsU0FBUyxFQUFFO2dCQUNQLDhDQUFxQjthQUN4QjtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7QUFBdkIsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IERpc3RhbmNlU2V0dXBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZGlzdGFuY2Utc2V0dXAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IERpc3RhbmNlU2V0dXBDb21wb25lbnQgfSBmcm9tIFwiLi9kaXN0YW5jZS1zZXR1cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQgeyBEaXN0YW5jZVNldHVwc1NlcnZpY2UgfSBmcm9tIFwiLi9kaXN0YW5jZS1zZXR1cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuXHRcdERpc3RhbmNlU2V0dXBSb3V0aW5nTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXHRcdEFjdGlvbkJ1dHRvbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHREaXN0YW5jZVNldHVwQ29tcG9uZW50XG5cdF0sXG5cdHNjaGVtYXM6IFtcblx0XHROT19FUlJPUlNfU0NIRU1BXG5cdF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERpc3RhbmNlU2V0dXBzU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRGlzdGFuY2VTZXR1cE1vZHVsZSB7IH0iXX0=