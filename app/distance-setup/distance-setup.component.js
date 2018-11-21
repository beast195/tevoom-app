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
        this.distanceSetupService.getDistanceSetup(this.originId, this.destinationId)
            .subscribe(function (data) {
            console.log(data);
        }, function (errorResponse) {
            console.log(errorResponse);
        });
    };
    DistanceSetupComponent.prototype.selectAddressOrigin = function () {
        // assign address text to origin
        // assign placeId to originId
        // clear places array
    };
    DistanceSetupComponent.prototype.selectAddressDestination = function () {
        // assign address text to origin
        // assign placeId to originId
        // clear places array
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBRXhFLG1HQUFtRjtBQUNuRiwwQ0FBaUQ7QUFDakQsbUVBQWlFO0FBU2pFO0lBVUMsZ0NBQW9CLG9CQUEyQyxFQUFTLEtBQXFCO1FBQTdGLGlCQU1DO1FBTm1CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUg3RixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBS1gsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksa0VBQXdCLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMzRCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFHRCxtREFBa0IsR0FBbEIsVUFBbUIsVUFBVTtRQUE3QixpQkFZQztRQVhBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzthQUNyRCxJQUFJLENBQUMsVUFBQyxNQUFhO1lBQ25CLHlCQUF5QjtZQUN6QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUVyQiw2Q0FBNkM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBYixDQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBRSxDQUFDLFVBQUEsS0FBSztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxtREFBa0IsR0FBbEIsVUFBbUIsVUFBVTtRQUM1QixJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDckQsSUFBSSxDQUFDLFVBQUMsTUFBVztZQUNqQix5QkFBeUI7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUUsQ0FBQyxVQUFBLEtBQUs7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsdURBQXNCLEdBQXRCO1FBRUMsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDNUUsU0FBUyxDQUNULFVBQUEsSUFBSTtZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsQ0FBQyxFQUNELFVBQUEsYUFBYTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUNDLENBQUM7SUFDTCxDQUFDO0lBRUEsb0RBQW1CLEdBQW5CO1FBQ0MsZ0NBQWdDO1FBRWhDLDZCQUE2QjtRQUU3QixxQkFBcUI7SUFFdEIsQ0FBQztJQUVELHlEQUF3QixHQUF4QjtRQUVBLGdDQUFnQztRQUUvQiw2QkFBNkI7UUFFN0IscUJBQXFCO0lBRXZCLENBQUM7SUEzRVcsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM3QyxDQUFDO3lDQVd5Qyw4Q0FBcUIsRUFBZ0IsdUJBQWM7T0FWakYsc0JBQXNCLENBZ0ZsQztJQUFELDZCQUFDO0NBQUEsQUFoRkQsSUFnRkM7QUFoRlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERpc3RhbmNlU2V0dXBzU2VydmljZSB9IGZyb20gXCIuL2Rpc3RhbmNlLXNldHVwLnNlcnZpY2VcIjtcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkRpc3RhbmNlU2V0dXBcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9kaXN0YW5jZS1zZXR1cC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9kaXN0YW5jZS1zZXR1cC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlzdGFuY2VTZXR1cENvbXBvbmVudCB7XG5cdHBhcmFtc1N1YnNjcmlwdGlvbjtcblx0dXNlck5hbWU7XG5cdG9yaWdpbjtcblx0ZGVzdGluYXRpb247XG5cdG9yaWdpbklkO1xuXHRkZXN0aW5hdGlvbklkO1xuXHRwbGFjZXMgPSBbXTtcblxuXHRwcml2YXRlIGdvb2dsZVBsYWNlc0F0dXRvQ29tcGxldGU6IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaXN0YW5jZVNldHVwU2VydmljZTogRGlzdGFuY2VTZXR1cHNTZXJ2aWNlLHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG5cblx0XHR0aGlzLmdvb2dsZVBsYWNlc0F0dXRvQ29tcGxldGUgPSBuZXcgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlKCdBSXphU3lCS0hNVkNzR1hUM3d6SnhPMGhDc2hfZW5wVDhaRFFaOGMnKTtcblx0XHR0aGlzLnBhcmFtc1N1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuXHRcdFx0dGhpcy51c2VyTmFtZSA9IHBhcmFtc1snbmFtZSddO1xuXHRcdH0pO1xuXHR9XG5cblxuXHRhdXRvQ29tcGxldGVQbGFjZU8oc2VhcmNoVGV4dCkge1xuXHRcdGNvbnNvbGUubG9nKHNlYXJjaFRleHQudmFsdWUpO1xuXHRcdHRoaXMuZ29vZ2xlUGxhY2VzQXR1dG9Db21wbGV0ZS5zZWFyY2goc2VhcmNoVGV4dC52YWx1ZSlcblx0XHRcdC50aGVuKChwbGFjZXM6IGFueVtdKSA9PiB7XG5cdFx0XHRcdC8vIHBsYWNlIHByZWRpY3Rpb25zIGxpc3Rcblx0XHRcdFx0dGhpcy5wbGFjZXMgPSBwbGFjZXM7XG5cblx0XHRcdFx0Ly9vcmlnaW49cGxhY2VfaWQ6Q2hJSjNTLUpYbWF1RW1zUlVjSWFXdGY0TXpFXG5cdFx0XHRcdGNvbnNvbGUubG9nKHBsYWNlcy5tYXAoYyA9PiBjLmRlc2NyaXB0aW9uKSk7XG5cdFx0XHR9LCAoZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRcdH0pKTtcblx0fVxuXG5cdGF1dG9Db21wbGV0ZVBsYWNlRChzZWFyY2hUZXh0KSB7XG5cdFx0dGhpcy5nb29nbGVQbGFjZXNBdHV0b0NvbXBsZXRlLnNlYXJjaChzZWFyY2hUZXh0LnZhbHVlKVxuXHRcdFx0LnRoZW4oKHBsYWNlczogYW55KSA9PiB7XG5cdFx0XHRcdC8vIHBsYWNlIHByZWRpY3Rpb25zIGxpc3Rcblx0XHRcdFx0Y29uc29sZS5sb2cocGxhY2VzKTtcblx0XHRcdH0sIChlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0fSkpO1xuXHR9XG5cblx0Z2V0RGlzdGFuY2VDYWxjdWxhdGlvbigpe1x0XHRcblxuXHRcdC8vb3JpZ2luPXBsYWNlX2lkOkNoSUozUy1KWG1hdUVtc1JVY0lhV3RmNE16RVxuXHRcdHRoaXMuZGlzdGFuY2VTZXR1cFNlcnZpY2UuZ2V0RGlzdGFuY2VTZXR1cCh0aGlzLm9yaWdpbklkLCB0aGlzLmRlc3RpbmF0aW9uSWQpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0ICBjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdCBcblx0XHRcdH0sXG5cdFx0XHRlcnJvclJlc3BvbnNlID0+IHtcblx0XHRcdCAgY29uc29sZS5sb2coZXJyb3JSZXNwb25zZSk7XHRcdFx0IFxuXHRcdFx0fVxuXHRcdCAgKTtcblx0fVxuXG5cdCBzZWxlY3RBZGRyZXNzT3JpZ2luKCl7XG5cdFx0IC8vIGFzc2lnbiBhZGRyZXNzIHRleHQgdG8gb3JpZ2luXG5cblx0XHQgLy8gYXNzaWduIHBsYWNlSWQgdG8gb3JpZ2luSWRcblxuXHRcdCAvLyBjbGVhciBwbGFjZXMgYXJyYXlcblxuXHQgfVxuXG5cdCBzZWxlY3RBZGRyZXNzRGVzdGluYXRpb24oKXtcblxuXHRcdC8vIGFzc2lnbiBhZGRyZXNzIHRleHQgdG8gb3JpZ2luXG5cblx0XHQgLy8gYXNzaWduIHBsYWNlSWQgdG8gb3JpZ2luSWRcblxuXHRcdCAvLyBjbGVhciBwbGFjZXMgYXJyYXlcblxuXHR9XG5cdFxuXG5cblxufSJdfQ==