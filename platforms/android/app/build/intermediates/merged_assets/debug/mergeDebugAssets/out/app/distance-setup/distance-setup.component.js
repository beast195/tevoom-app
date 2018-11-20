"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_google_places_autocomplete_1 = require("nativescript-google-places-autocomplete");
var router_1 = require("@angular/router");
var distance_setup_service_1 = require("./distance-setup.service");
var DistanceSetupComponent = /** @class */ (function () {
    function DistanceSetupComponent(distanceSetupService, route) {
        var _this = this;
        this.distanceSetupService = distanceSetupService;
        this.route = route;
        this.googlePlacesAtutoComplete = new nativescript_google_places_autocomplete_1.GooglePlacesAutocomplete('AIzaSyBKHMVCsGXT3wzJxO0hCsh_enpT8ZDQZ8');
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.userName = params['name'];
        });
    }
    DistanceSetupComponent.prototype.autoCompletePlaceO = function (searchText) {
        this.googlePlacesAtutoComplete.search(searchText)
            .then(function (places) {
            // place predictions list
        }, (function (error) {
            console.log(error);
        }));
    };
    DistanceSetupComponent.prototype.autoCompletePlaceD = function (searchText) {
        this.googlePlacesAtutoComplete.search(searchText)
            .then(function (places) {
            // place predictions list
        }, (function (error) {
            console.log(error);
        }));
    };
    DistanceSetupComponent.prototype.getDistanceCalculation = function () {
        this.distanceSetupService.getDistanceSetup(this.origin, this.destination)
            .subscribe(function (data) {
            console.log(data);
        }, function (errorResponse) {
            console.log(errorResponse);
        });
    };
    DistanceSetupComponent = __decorate([
        core_1.Component({
            selector: "DistanceSetup",
            moduleId: module.id,
            templateUrl: "./distance-setup.component.html",
            styleUrls: ['./distance-setup.component.css']
        }),
        __metadata("design:paramtypes", [distance_setup_service_1.DistanceSetupsService, router_1.ActivatedRoute])
    ], DistanceSetupComponent);
    return DistanceSetupComponent;
}());
exports.DistanceSetupComponent = DistanceSetupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBRXhFLG1HQUFtRjtBQUNuRiwwQ0FBaUQ7QUFDakQsbUVBQWlFO0FBUWpFO0lBTUMsZ0NBQW9CLG9CQUEyQyxFQUFTLEtBQXFCO1FBQTdGLGlCQU1DO1FBTm1CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUU1RixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxrRUFBd0IsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzNELEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUdELG1EQUFrQixHQUFsQixVQUFtQixVQUFVO1FBQzVCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2FBQy9DLElBQUksQ0FBQyxVQUFDLE1BQVc7WUFDakIseUJBQXlCO1FBQzFCLENBQUMsRUFBRSxDQUFDLFVBQUEsS0FBSztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxtREFBa0IsR0FBbEIsVUFBbUIsVUFBVTtRQUM1QixJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUMvQyxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2pCLHlCQUF5QjtRQUMxQixDQUFDLEVBQUUsQ0FBQyxVQUFBLEtBQUs7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsdURBQXNCLEdBQXRCO1FBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4RSxTQUFTLENBQ1QsVUFBQSxJQUFJO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixDQUFDLEVBQ0QsVUFBQSxhQUFhO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQ0MsQ0FBQztJQUNMLENBQUM7SUE1Q1csc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM3QyxDQUFDO3lDQU95Qyw4Q0FBcUIsRUFBZ0IsdUJBQWM7T0FOakYsc0JBQXNCLENBK0NsQztJQUFELDZCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERpc3RhbmNlU2V0dXBzU2VydmljZSB9IGZyb20gXCIuL2Rpc3RhbmNlLXNldHVwLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkRpc3RhbmNlU2V0dXBcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9kaXN0YW5jZS1zZXR1cC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9kaXN0YW5jZS1zZXR1cC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlzdGFuY2VTZXR1cENvbXBvbmVudCB7XG5cdHBhcmFtc1N1YnNjcmlwdGlvbjtcblx0dXNlck5hbWU7XG5cdG9yaWdpbjtcblx0ZGVzdGluYXRpb247XG5cdHByaXZhdGUgZ29vZ2xlUGxhY2VzQXR1dG9Db21wbGV0ZTogR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc3RhbmNlU2V0dXBTZXJ2aWNlOiBEaXN0YW5jZVNldHVwc1NlcnZpY2UscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcblxuXHRcdHRoaXMuZ29vZ2xlUGxhY2VzQXR1dG9Db21wbGV0ZSA9IG5ldyBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUoJ0FJemFTeUJLSE1WQ3NHWFQzd3pKeE8waENzaF9lbnBUOFpEUVo4Jyk7XG5cdFx0dGhpcy5wYXJhbXNTdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcblx0XHRcdHRoaXMudXNlck5hbWUgPSBwYXJhbXNbJ25hbWUnXTtcblx0XHR9KTtcblx0fVxuXG5cblx0YXV0b0NvbXBsZXRlUGxhY2VPKHNlYXJjaFRleHQpIHtcblx0XHR0aGlzLmdvb2dsZVBsYWNlc0F0dXRvQ29tcGxldGUuc2VhcmNoKHNlYXJjaFRleHQpXG5cdFx0XHQudGhlbigocGxhY2VzOiBhbnkpID0+IHtcblx0XHRcdFx0Ly8gcGxhY2UgcHJlZGljdGlvbnMgbGlzdFxuXHRcdFx0fSwgKGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0XHR9KSk7XG5cdH1cblxuXHRhdXRvQ29tcGxldGVQbGFjZUQoc2VhcmNoVGV4dCkge1xuXHRcdHRoaXMuZ29vZ2xlUGxhY2VzQXR1dG9Db21wbGV0ZS5zZWFyY2goc2VhcmNoVGV4dClcblx0XHRcdC50aGVuKChwbGFjZXM6IGFueSkgPT4ge1xuXHRcdFx0XHQvLyBwbGFjZSBwcmVkaWN0aW9ucyBsaXN0XG5cdFx0XHR9LCAoZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRcdH0pKTtcblx0fVxuXG5cdGdldERpc3RhbmNlQ2FsY3VsYXRpb24oKXtcblx0XHR0aGlzLmRpc3RhbmNlU2V0dXBTZXJ2aWNlLmdldERpc3RhbmNlU2V0dXAodGhpcy5vcmlnaW4sIHRoaXMuZGVzdGluYXRpb24pXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0ICBjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdCBcblx0XHRcdH0sXG5cdFx0XHRlcnJvclJlc3BvbnNlID0+IHtcblx0XHRcdCAgY29uc29sZS5sb2coZXJyb3JSZXNwb25zZSk7XHRcdFx0IFxuXHRcdFx0fVxuXHRcdCAgKTtcblx0fVxuXG5cbn0iXX0=