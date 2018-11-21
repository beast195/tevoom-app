"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var details_routing_module_1 = require("./details-routing.module");
var details_component_1 = require("./details.component");
var action_button_module_1 = require("../action-button/action-button.module");
var DetailsModule = /** @class */ (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                details_routing_module_1.DetailsRoutingModule,
                forms_1.NativeScriptFormsModule,
                action_button_module_1.ActionButtonModule
            ],
            declarations: [
                details_component_1.DetailsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], DetailsModule);
    return DetailsModule;
}());
exports.DetailsModule = DetailsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBRXJFLG1FQUFnRTtBQUNoRSx5REFBdUQ7QUFDdkQsOEVBQTJFO0FBZ0IzRTtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQWR6QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUU7Z0JBQ1IsaUNBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLCtCQUF1QjtnQkFDdkIseUNBQWtCO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNiLG9DQUFnQjthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUix1QkFBZ0I7YUFDaEI7U0FDRCxDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IERldGFpbHNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZGV0YWlscy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL2RldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuXHRcdERldGFpbHNSb3V0aW5nTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXHRcdEFjdGlvbkJ1dHRvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHREZXRhaWxzQ29tcG9uZW50XG5cdF0sXG5cdHNjaGVtYXM6IFtcblx0XHROT19FUlJPUlNfU0NIRU1BXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc01vZHVsZSB7IH0iXX0=