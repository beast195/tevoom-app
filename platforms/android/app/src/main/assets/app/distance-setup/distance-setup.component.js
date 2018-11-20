"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_google_places_autocomplete_1 = require("nativescript-google-places-autocomplete");
var router_1 = require("@angular/router");
var distance_setup_service_1 = require("./distance-setup.service");
var autocomplete_directives_1 = require("nativescript-ui-autocomplete/angular/autocomplete-directives");
require("rxjs/add/observable/of");
var DistanceSetupComponent = /** @class */ (function () {
    function DistanceSetupComponent(distanceSetupService, route) {
        var _this = this;
        this.distanceSetupService = distanceSetupService;
        this.route = route;
        this.places = [];
        this.googlePlacesAtutoComplete = new nativescript_google_places_autocomplete_1.GooglePlacesAutocomplete('AIzaSyBKHMVCsGXT3wzJxO0hCsh_enpT8ZDQZ8c');
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.userName = params['name'];
        });
    }
    DistanceSetupComponent.prototype.autoCompletePlaceO = function (searchText) {
        var _this = this;
        console.log(searchText.value);
        this.googlePlacesAtutoComplete.search(searchText.value)
            .then(function (places) {
            // place predictions list
            _this.places = places;
            //origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE
            console.log(places.map(function (c) { return c.description; }));
        }, (function (error) {
            console.log(error);
        }));
    };
    DistanceSetupComponent.prototype.autoCompletePlaceD = function (searchText) {
        this.googlePlacesAtutoComplete.search(searchText.value)
            .then(function (places) {
            // place predictions list
            console.log(places);
        }, (function (error) {
            console.log(error);
        }));
    };
    DistanceSetupComponent.prototype.getDistanceCalculation = function () {
        //origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE
        this.distanceSetupService.getDistanceSetup(this.origin, this.destination)
            .subscribe(function (data) {
            console.log(data);
        }, function (errorResponse) {
            console.log(errorResponse);
        });
    };
    DistanceSetupComponent.prototype.onDidAutoComplete = function (args) {
        console.log(args.text);
    };
    __decorate([
        core_1.ViewChild("autocomplete"),
        __metadata("design:type", autocomplete_directives_1.RadAutoCompleteTextViewComponent)
    ], DistanceSetupComponent.prototype, "autocomplete", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBRXhFLG1HQUFtRjtBQUNuRiwwQ0FBaUQ7QUFDakQsbUVBQWlFO0FBQ2pFLHdHQUFnSDtBQUVoSCxrQ0FBZ0M7QUFRaEM7SUFTQyxnQ0FBb0Isb0JBQTJDLEVBQVMsS0FBcUI7UUFBN0YsaUJBTUM7UUFObUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSjdGLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFNWCxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxrRUFBd0IsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQ3pHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzNELEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUdELG1EQUFrQixHQUFsQixVQUFtQixVQUFVO1FBQTdCLGlCQVlDO1FBWEEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ3JELElBQUksQ0FBQyxVQUFDLE1BQWE7WUFDbkIseUJBQXlCO1lBQ3pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXJCLDZDQUE2QztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFiLENBQWEsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFFLENBQUMsVUFBQSxLQUFLO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELG1EQUFrQixHQUFsQixVQUFtQixVQUFVO1FBQzVCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzthQUNyRCxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2pCLHlCQUF5QjtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBRSxDQUFDLFVBQUEsS0FBSztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCx1REFBc0IsR0FBdEI7UUFHRyw2Q0FBNkM7UUFDL0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4RSxTQUFTLENBQ1QsVUFBQSxJQUFJO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixDQUFDLEVBQ0QsVUFBQSxhQUFhO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQ0MsQ0FBQztJQUNMLENBQUM7SUFFTyxrREFBaUIsR0FBeEIsVUFBeUIsSUFBSTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBdEQwQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSwwREFBZ0M7Z0VBQUM7SUFOOUQsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM3QyxDQUFDO3lDQVV5Qyw4Q0FBcUIsRUFBZ0IsdUJBQWM7T0FUakYsc0JBQXNCLENBaUVsQztJQUFELDZCQUFDO0NBQUEsQUFqRUQsSUFpRUM7QUFqRVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERpc3RhbmNlU2V0dXBzU2VydmljZSB9IGZyb20gXCIuL2Rpc3RhbmNlLXNldHVwLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhci9hdXRvY29tcGxldGUtZGlyZWN0aXZlc1wiO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkRpc3RhbmNlU2V0dXBcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9kaXN0YW5jZS1zZXR1cC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9kaXN0YW5jZS1zZXR1cC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlzdGFuY2VTZXR1cENvbXBvbmVudCB7XG5cdHBhcmFtc1N1YnNjcmlwdGlvbjtcblx0dXNlck5hbWU7XG5cdG9yaWdpbjtcblx0ZGVzdGluYXRpb247XG5cdHBsYWNlcyA9IFtdO1xuXHRAVmlld0NoaWxkKFwiYXV0b2NvbXBsZXRlXCIpIGF1dG9jb21wbGV0ZTogUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdDb21wb25lbnQ7XG5cblx0cHJpdmF0ZSBnb29nbGVQbGFjZXNBdHV0b0NvbXBsZXRlOiBHb29nbGVQbGFjZXNBdXRvY29tcGxldGU7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzdGFuY2VTZXR1cFNlcnZpY2U6IERpc3RhbmNlU2V0dXBzU2VydmljZSxwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXG5cdFx0dGhpcy5nb29nbGVQbGFjZXNBdHV0b0NvbXBsZXRlID0gbmV3IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSgnQUl6YVN5QktITVZDc0dYVDN3ekp4TzBoQ3NoX2VucFQ4WkRRWjhjJyk7XG5cdFx0dGhpcy5wYXJhbXNTdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcblx0XHRcdHRoaXMudXNlck5hbWUgPSBwYXJhbXNbJ25hbWUnXTtcblx0XHR9KTtcblx0fVxuXG5cblx0YXV0b0NvbXBsZXRlUGxhY2VPKHNlYXJjaFRleHQpIHtcblx0XHRjb25zb2xlLmxvZyhzZWFyY2hUZXh0LnZhbHVlKTtcblx0XHR0aGlzLmdvb2dsZVBsYWNlc0F0dXRvQ29tcGxldGUuc2VhcmNoKHNlYXJjaFRleHQudmFsdWUpXG5cdFx0XHQudGhlbigocGxhY2VzOiBhbnlbXSkgPT4ge1xuXHRcdFx0XHQvLyBwbGFjZSBwcmVkaWN0aW9ucyBsaXN0XG5cdFx0XHRcdHRoaXMucGxhY2VzID0gcGxhY2VzO1xuXG5cdFx0XHRcdC8vb3JpZ2luPXBsYWNlX2lkOkNoSUozUy1KWG1hdUVtc1JVY0lhV3RmNE16RVxuXHRcdFx0XHRjb25zb2xlLmxvZyhwbGFjZXMubWFwKGMgPT4gYy5kZXNjcmlwdGlvbikpO1xuXHRcdFx0fSwgKGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0XHR9KSk7XG5cdH1cblxuXHRhdXRvQ29tcGxldGVQbGFjZUQoc2VhcmNoVGV4dCkge1xuXHRcdHRoaXMuZ29vZ2xlUGxhY2VzQXR1dG9Db21wbGV0ZS5zZWFyY2goc2VhcmNoVGV4dC52YWx1ZSlcblx0XHRcdC50aGVuKChwbGFjZXM6IGFueSkgPT4ge1xuXHRcdFx0XHQvLyBwbGFjZSBwcmVkaWN0aW9ucyBsaXN0XG5cdFx0XHRcdGNvbnNvbGUubG9nKHBsYWNlcyk7XG5cdFx0XHR9LCAoZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRcdH0pKTtcblx0fVxuXG5cdGdldERpc3RhbmNlQ2FsY3VsYXRpb24oKXtcblx0XHRcblxuXHRcdFx0XHQvL29yaWdpbj1wbGFjZV9pZDpDaElKM1MtSlhtYXVFbXNSVWNJYVd0ZjRNekVcblx0XHR0aGlzLmRpc3RhbmNlU2V0dXBTZXJ2aWNlLmdldERpc3RhbmNlU2V0dXAodGhpcy5vcmlnaW4sIHRoaXMuZGVzdGluYXRpb24pXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0ICBjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdCBcblx0XHRcdH0sXG5cdFx0XHRlcnJvclJlc3BvbnNlID0+IHtcblx0XHRcdCAgY29uc29sZS5sb2coZXJyb3JSZXNwb25zZSk7XHRcdFx0IFxuXHRcdFx0fVxuXHRcdCAgKTtcblx0fVxuXG5cdCBwdWJsaWMgb25EaWRBdXRvQ29tcGxldGUoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLnRleHQpO1xuXHR9XG5cdFxuXG5cblxufSJdfQ==