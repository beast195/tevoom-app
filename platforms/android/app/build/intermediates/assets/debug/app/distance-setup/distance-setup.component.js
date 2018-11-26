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
        this.originId = null;
        this.destinationId = null;
        this.originplaces = [];
        this.destplaces = [];
        this.distance = 0;
        this.total = 0;
        this.googlePlacesAtutoComplete = new nativescript_google_places_autocomplete_1.GooglePlacesAutocomplete('AIzaSyBKHMVCsGXT3wzJxO0hCsh_enpT8ZDQZ8c');
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.userName = params['name'];
        });
    }
    DistanceSetupComponent.prototype.autoCompletePlaceO = function (searchText) {
        var _this = this;
        console.log(searchText.value);
        if (this.originId == null) {
            this.googlePlacesAtutoComplete.search(searchText.value)
                .then(function (places) {
                // place predictions list
                _this.originplaces = places;
                //origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE
                //placeId
                console.log(places.map(function (c) { return c.description; }));
            }, (function (error) {
                console.log(error);
            }));
        }
    };
    DistanceSetupComponent.prototype.autoCompletePlaceD = function (searchText) {
        var _this = this;
        if (this.destinationId == null) {
            this.googlePlacesAtutoComplete.search(searchText.value)
                .then(function (places) {
                // place predictions list
                _this.destplaces = places;
            }, (function (error) {
                console.log(error);
            }));
        }
    };
    DistanceSetupComponent.prototype.getDistanceCalculation = function () {
        var _this = this;
        //origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE
        this.distanceSetupService.getDistanceSetup(this.originId, this.destinationId)
            .subscribe(function (data) {
            console.log(data);
            _this.distance = data.routes[0].legs[0].distance.value / 1000;
            _this.total = _this.distance * 2.5;
        }, function (errorResponse) {
            console.log(errorResponse);
        });
    };
    DistanceSetupComponent.prototype.selectAddressOrigin = function (placeId, addresText) {
        // assign address id
        this.originId = 'place_id:' + placeId;
        // assign address text
        this.origin = addresText;
        // clear places array
        this.originplaces = [];
    };
    DistanceSetupComponent.prototype.selectAddressDestination = function (placeId, addresText) {
        // assign address text to destId
        this.destinationId = 'place_id:' + placeId;
        // assign placeId to dest
        this.destination = addresText;
        // clear places array
        this.destplaces = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBRXhFLG1HQUFtRjtBQUNuRiwwQ0FBaUQ7QUFDakQsbUVBQWlFO0FBU2pFO0lBYUMsZ0NBQW9CLG9CQUEyQyxFQUFTLEtBQXFCO1FBQTdGLGlCQU1DO1FBTm1CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVI3RixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLFVBQUssR0FBRyxDQUFDLENBQUM7UUFLVCxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxrRUFBd0IsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQ3pHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzNELEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUdELG1EQUFrQixHQUFsQixVQUFtQixVQUFVO1FBQTdCLGlCQWVDO1FBZEEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFDckQsSUFBSSxDQUFDLFVBQUMs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bmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUgfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEaXN0YW5jZVNldHVwc1NlcnZpY2UgfSBmcm9tIFwiLi9kaXN0YW5jZS1zZXR1cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJEaXN0YW5jZVNldHVwXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vZGlzdGFuY2Utc2V0dXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpc3RhbmNlU2V0dXBDb21wb25lbnQge1xuXHRwYXJhbXNTdWJzY3JpcHRpb247XG5cdHVzZXJOYW1lO1xuXHRvcmlnaW47XG5cdGRlc3RpbmF0aW9uO1xuXHRvcmlnaW5JZCA9IG51bGw7XG5cdGRlc3RpbmF0aW9uSWQgPSBudWxsO1xuXHRvcmlnaW5wbGFjZXMgPSBbXTtcblx0ZGVzdHBsYWNlcyA9IFtdO1xuXHRkaXN0YW5jZSA9IDA7XG5cdHRvdGFsID0gMDtcblxuXHRwcml2YXRlIGdvb2dsZVBsYWNlc0F0dXRvQ29tcGxldGU6IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaXN0YW5jZVNldHVwU2VydmljZTogRGlzdGFuY2VTZXR1cHNTZXJ2aWNlLHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG5cblx0XHR0aGlzLmdvb2dsZVBsYWNlc0F0dXRvQ29tcGxldGUgPSBuZXcgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlKCdBSXphU3lCS0hNVkNzR1hUM3d6SnhPMGhDc2hfZW5wVDhaRFFaOGMnKTtcblx0XHR0aGlzLnBhcmFtc1N1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuXHRcdFx0dGhpcy51c2VyTmFtZSA9IHBhcmFtc1snbmFtZSddO1xuXHRcdH0pO1xuXHR9XG5cblxuXHRhdXRvQ29tcGxldGVQbGFjZU8oc2VhcmNoVGV4dCkge1xuXHRcdGNvbnNvbGUubG9nKHNlYXJjaFRleHQudmFsdWUpO1xuXHRcdGlmKHRoaXMub3JpZ2luSWQgPT0gbnVsbCkge1x0XHRcblx0XHR0aGlzLmdvb2dsZVBsYWNlc0F0dXRvQ29tcGxldGUuc2VhcmNoKHNlYXJjaFRleHQudmFsdWUpXG5cdFx0XHQudGhlbigocGxhY2VzOiBhbnlbXSkgPT4ge1xuXHRcdFx0XHQvLyBwbGFjZSBwcmVkaWN0aW9ucyBsaXN0XG5cdFx0XHRcdHRoaXMub3JpZ2lucGxhY2VzID0gcGxhY2VzO1xuXG5cdFx0XHRcdC8vb3JpZ2luPXBsYWNlX2lkOkNoSUozUy1KWG1hdUVtc1JVY0lhV3RmNE16RVxuXHRcdFx0XHQvL3BsYWNlSWRcblx0XHRcdFx0Y29uc29sZS5sb2cocGxhY2VzLm1hcChjID0+IGMuZGVzY3JpcHRpb24pKTtcblx0XHRcdH0sIChlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fVxuXG5cdGF1dG9Db21wbGV0ZVBsYWNlRChzZWFyY2hUZXh0KSB7XG5cdFx0aWYodGhpcy5kZXN0aW5hdGlvbklkID09IG51bGwpIHtcdFx0XG5cdFx0dGhpcy5nb29nbGVQbGFjZXNBdHV0b0NvbXBsZXRlLnNlYXJjaChzZWFyY2hUZXh0LnZhbHVlKVxuXHRcdFx0LnRoZW4oKHBsYWNlczogYW55KSA9PiB7XG5cdFx0XHRcdC8vIHBsYWNlIHByZWRpY3Rpb25zIGxpc3Rcblx0XHRcdFx0dGhpcy5kZXN0cGxhY2VzID0gcGxhY2VzO1xuXHRcdFx0fSwgKGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0RGlzdGFuY2VDYWxjdWxhdGlvbigpe1x0XHRcblxuXHRcdC8vb3JpZ2luPXBsYWNlX2lkOkNoSUozUy1KWG1hdUVtc1JVY0lhV3RmNE16RVxuXHRcdHRoaXMuZGlzdGFuY2VTZXR1cFNlcnZpY2UuZ2V0RGlzdGFuY2VTZXR1cCh0aGlzLm9yaWdpbklkLCB0aGlzLmRlc3RpbmF0aW9uSWQpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0ICBjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdCAgdGhpcy5kaXN0YW5jZSA9IGRhdGEucm91dGVzWzBdLmxlZ3NbMF0uZGlzdGFuY2UudmFsdWUgLyAxMDAwO1xuXHRcdFx0ICB0aGlzLnRvdGFsID0gdGhpcy5kaXN0YW5jZSAqIDIuNTtcblx0XHRcdCBcblx0XHRcdH0sXG5cdFx0XHRlcnJvclJlc3BvbnNlID0+IHtcblx0XHRcdCAgY29uc29sZS5sb2coZXJyb3JSZXNwb25zZSk7XHRcdFx0IFxuXHRcdFx0fVxuXHRcdCAgKTtcblx0fVxuXG5cdCBzZWxlY3RBZGRyZXNzT3JpZ2luKHBsYWNlSWQsIGFkZHJlc1RleHQpe1xuXHRcdCAvLyBhc3NpZ24gYWRkcmVzcyBpZFxuXHRcdCB0aGlzLm9yaWdpbklkID0gJ3BsYWNlX2lkOicgKyBwbGFjZUlkO1xuXHRcdCAvLyBhc3NpZ24gYWRkcmVzcyB0ZXh0XG5cdFx0IHRoaXMub3JpZ2luID0gYWRkcmVzVGV4dDtcblx0XHQgLy8gY2xlYXIgcGxhY2VzIGFycmF5XG5cdFx0IHRoaXMub3JpZ2lucGxhY2VzID0gW107XG5cblx0IH1cblxuXHQgc2VsZWN0QWRkcmVzc0Rlc3RpbmF0aW9uKHBsYWNlSWQsIGFkZHJlc1RleHQpe1xuXG5cdFx0Ly8gYXNzaWduIGFkZHJlc3MgdGV4dCB0byBkZXN0SWRcblx0XHR0aGlzLmRlc3RpbmF0aW9uSWQgPSAncGxhY2VfaWQ6JyArIHBsYWNlSWQ7XG5cdFx0IC8vIGFzc2lnbiBwbGFjZUlkIHRvIGRlc3Rcblx0XHQgdGhpcy5kZXN0aW5hdGlvbiA9IGFkZHJlc1RleHQ7XG5cdFx0IC8vIGNsZWFyIHBsYWNlcyBhcnJheVxuXHRcdCB0aGlzLmRlc3RwbGFjZXMgPSBbXTtcblxuXHR9XG5cdFxuXG5cblxufSJdfQ==