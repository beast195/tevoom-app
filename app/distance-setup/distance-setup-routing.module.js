"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var distance_setup_component_1 = require("./distance-setup.component");
var routes = [
    { path: "", component: distance_setup_component_1.DistanceSetupComponent }
];
var DistanceSetupRoutingModule = /** @class */ (function () {
    function DistanceSetupRoutingModule() {
    }
    DistanceSetupRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], DistanceSetupRoutingModule);
    return DistanceSetupRoutingModule;
}());
exports.DistanceSetupRoutingModule = DistanceSetupRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXN0YW5jZS1zZXR1cC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsdUVBQW9FO0FBRXBFLElBQU0sTUFBTSxHQUFXO0lBQ3RCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUU7Q0FDL0MsQ0FBQztBQU1GO0lBQUE7SUFBMEMsQ0FBQztJQUE5QiwwQkFBMEI7UUFKdEMsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ25DLENBQUM7T0FDVywwQkFBMEIsQ0FBSTtJQUFELGlDQUFDO0NBQUEsQUFBM0MsSUFBMkM7QUFBOUIsZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBEaXN0YW5jZVNldHVwQ29tcG9uZW50IH0gZnJvbSBcIi4vZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuXHR7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogRGlzdGFuY2VTZXR1cENvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuXHRleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBEaXN0YW5jZVNldHVwUm91dGluZ01vZHVsZSB7IH0iXX0=