"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var enums_1 = require("tns-core-modules/ui/enums");
var frame_1 = require("tns-core-modules/ui/frame");
var color_1 = require("color");
var application_1 = require("application");
var platform_1 = require("platform");
var animations_service_1 = require("../animations-service");
var landmarks_service_1 = require("../landmarks-service");
var action_button_component_1 = require("../action-button/action-button.component");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(animationsService, landmarksService, routerExtensions, page, location) {
        this.animationsService = animationsService;
        this.landmarksService = landmarksService;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.location = location;
        this._adjustedOffset = 0;
        this.page['scrollableContent'] = true;
        this._landmarks = this.landmarksService.getLandmarks();
        if (application_1.android) {
            this._updateStatusBarColor("#2B3238");
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location.onPopState(function () {
            _this._onNavigatedTo();
        });
        if (application_1.ios) {
            frame_1.topmost().ios.controller.navigationBar.barStyle = 1;
        }
    };
    Object.defineProperty(HomeComponent.prototype, "landmarks", {
        get: function () {
            return this._landmarks;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.onNavigationItemTap = function (args) {
        var _this = this;
        this.landmarksService.setSelectedId(args.index);
        this._selectedView = args.view;
        this.animationsService.animationOffset = this.measureOffset(args.view, args.object);
        this.routerExtensions.navigate(['/details'], { animated: false });
        setTimeout(function () {
            _this._prepareForBackNavigation();
        });
    };
    HomeComponent.prototype.measureOffset = function (view1, view2) {
        var offset = view1.getLocationRelativeTo(view2).y;
        if (view2.ios && view2.ios.adjustedContentInset) {
            this._adjustedOffset = view2.ios.adjustedContentInset.top;
        }
        return offset - this._adjustedOffset;
    };
    HomeComponent.prototype._prepareForBackNavigation = function () {
        this._listRef.nativeElement.opacity = 0;
        this._selectedView.opacity = 0;
        this._imageRef.nativeElement.src = this.landmarksService.getSelected().image;
        this._imageContainerRef.nativeElement.translateY = this._adjustedOffset;
        this._imageContainerRef.nativeElement.opacity = 1;
        this._buttonRef.makeArrow();
        this._searchRef.nativeElement.opacity = 0;
    };
    HomeComponent.prototype._onNavigatedTo = function () {
        var _this = this;
        var offset = this.animationsService.animationOffset + this._adjustedOffset;
        this._imageContainerRef.nativeElement.animate({
            translate: { x: 0, y: offset },
            duration: 200,
            curve: enums_1.AnimationCurve.easeOut
        }).then(function () {
            _this._selectedView.opacity = 1;
            _this._imageContainerRef.nativeElement.animate({
                opacity: 0,
                duration: 400,
                curve: enums_1.AnimationCurve.easeOut
            }).then(function () {
                _this._imageContainerRef.nativeElement.translateY = 0;
            });
        }).catch(function () { });
        this._listRef.nativeElement.animate({
            opacity: 1,
            duration: 200
        }).catch(function () { });
        this._searchRef.nativeElement.animate({
            opacity: 1,
            duration: 200
        }).catch(function () { });
    };
    HomeComponent.prototype._updateStatusBarColor = function (color) {
        if (platform_1.device.sdkVersion >= "21" && application_1.android.foregroundActivity) {
            var nativeColor = new color_1.Color(color).android;
            var window = application_1.android.foregroundActivity.getWindow();
            window.setStatusBarColor(nativeColor);
        }
    };
    __decorate([
        core_1.ViewChild("actionButton"),
        __metadata("design:type", action_button_component_1.ActionButtonComponent)
    ], HomeComponent.prototype, "_buttonRef", void 0);
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "_searchRef", void 0);
    __decorate([
        core_1.ViewChild("list"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "_listRef", void 0);
    __decorate([
        core_1.ViewChild("animatingImage"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "_imageRef", void 0);
    __decorate([
        core_1.ViewChild("animatingImageContainer"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "_imageContainerRef", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [animations_service_1.AnimationsService,
            landmarks_service_1.LandmarksService,
            router_1.RouterExtensions,
            page_1.Page,
            common_1.PlatformLocation])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwQ0FBbUQ7QUFHbkQsc0RBQStEO0FBRS9ELGlEQUFnRDtBQUNoRCxtREFBMkQ7QUFDM0QsbURBQW9EO0FBQ3BELCtCQUE4QjtBQUM5QiwyQ0FBMkM7QUFDM0MscUNBQWtDO0FBQ2xDLDREQUEwRDtBQUMxRCwwREFBd0Q7QUFDeEQsb0ZBQWlGO0FBUWpGO0lBV0ksdUJBQW9CLGlCQUFvQyxFQUM1QyxnQkFBa0MsRUFDbEMsZ0JBQWtDLEVBQ2xDLElBQVUsRUFDVixRQUEwQjtRQUpsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzVDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFaOUIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFjaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV2RCxFQUFFLENBQUMsQ0FBQyxxQkFBTyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxDQUFDLGlCQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sZUFB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QUE1QixnQkFBUyxDQUFDLGdCQUFnQixDQUFDO2tDQUFZLGlCQUFVO29EQUFDO0lBQ2I7UUFBckMsZ0JBQVMsQ0FBQyx5QkFBeUIsQ0FBQztrQ0FBcUIsaUJBQVU7NkRBQUM7SUFUNUQsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FZeUMsc0NBQWlCO1lBQzFCLG9DQUFnQjtZQUNoQix5QkFBZ0I7WUFDNUIsV0FBSTtZQUNBLHlCQUFnQjtPQWY3QixhQUFhLENBdUd6QjtJQUFELG9CQUFDO0NBQUEsQUF2R0QsSUF1R0M7QUF2R1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbGF0Zm9ybUxvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTGFuZG1hcmsgfSBmcm9tIFwiLi4vbGFuZG1hcmtcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgYW5kcm9pZCwgaW9zIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IEFuaW1hdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMtc2VydmljZVwiO1xuaW1wb3J0IHsgTGFuZG1hcmtzU2VydmljZSB9IGZyb20gXCIuLi9sYW5kbWFya3Mtc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfbGFuZG1hcmtzOiBMYW5kbWFya1tdO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkVmlldzogVmlldztcbiAgICBwcml2YXRlIF9hZGp1c3RlZE9mZnNldDogbnVtYmVyID0gMDtcblxuICAgIEBWaWV3Q2hpbGQoXCJhY3Rpb25CdXR0b25cIikgX2J1dHRvblJlZjogQWN0aW9uQnV0dG9uQ29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoXCJzZWFyY2hcIikgX3NlYXJjaFJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwibGlzdFwiKSBfbGlzdFJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiYW5pbWF0aW5nSW1hZ2VcIikgX2ltYWdlUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJhbmltYXRpbmdJbWFnZUNvbnRhaW5lclwiKSBfaW1hZ2VDb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuaW1hdGlvbnNTZXJ2aWNlOiBBbmltYXRpb25zU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsYW5kbWFya3NTZXJ2aWNlOiBMYW5kbWFya3NTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbikge1xuXG4gICAgICAgIHRoaXMucGFnZVsnc2Nyb2xsYWJsZUNvbnRlbnQnXSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xhbmRtYXJrcyA9IHRoaXMubGFuZG1hcmtzU2VydmljZS5nZXRMYW5kbWFya3MoKTtcblxuICAgICAgICBpZiAoYW5kcm9pZCkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3RhdHVzQmFyQ29sb3IoXCIjMkIzMjM4XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLm9uUG9wU3RhdGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25OYXZpZ2F0ZWRUbygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaW9zKSB7XG4gICAgICAgICAgICB0b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIubmF2aWdhdGlvbkJhci5iYXJTdHlsZSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbGFuZG1hcmtzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZG1hcmtzO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk5hdmlnYXRpb25JdGVtVGFwKGFyZ3M6IGFueSkge1xuICAgICAgICB0aGlzLmxhbmRtYXJrc1NlcnZpY2Uuc2V0U2VsZWN0ZWRJZChhcmdzLmluZGV4KTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRWaWV3ID0gYXJncy52aWV3O1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnNTZXJ2aWNlLmFuaW1hdGlvbk9mZnNldCA9IHRoaXMubWVhc3VyZU9mZnNldChhcmdzLnZpZXcsIGFyZ3Mub2JqZWN0KTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2RldGFpbHMnXSwgeyBhbmltYXRlZDogZmFsc2UgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcHJlcGFyZUZvckJhY2tOYXZpZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWVhc3VyZU9mZnNldCh2aWV3MTogVmlldywgdmlldzI6IFZpZXcpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHZpZXcxLmdldExvY2F0aW9uUmVsYXRpdmVUbyh2aWV3MikueTtcbiAgICAgICAgaWYgKHZpZXcyLmlvcyAmJiB2aWV3Mi5pb3MuYWRqdXN0ZWRDb250ZW50SW5zZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkanVzdGVkT2Zmc2V0ID0gdmlldzIuaW9zLmFkanVzdGVkQ29udGVudEluc2V0LnRvcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Zmc2V0IC0gdGhpcy5fYWRqdXN0ZWRPZmZzZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJlcGFyZUZvckJhY2tOYXZpZ2F0aW9uKCkge1xuICAgICAgICB0aGlzLl9saXN0UmVmLm5hdGl2ZUVsZW1lbnQub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVmlldy5vcGFjaXR5ID0gMDtcblxuICAgICAgICB0aGlzLl9pbWFnZVJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMubGFuZG1hcmtzU2VydmljZS5nZXRTZWxlY3RlZCgpLmltYWdlO1xuICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVkgPSB0aGlzLl9hZGp1c3RlZE9mZnNldDtcbiAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5vcGFjaXR5ID0gMTtcblxuICAgICAgICB0aGlzLl9idXR0b25SZWYubWFrZUFycm93KCk7XG4gICAgICAgIHRoaXMuX3NlYXJjaFJlZi5uYXRpdmVFbGVtZW50Lm9wYWNpdHkgPSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uTmF2aWdhdGVkVG8oKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmFuaW1hdGlvbnNTZXJ2aWNlLmFuaW1hdGlvbk9mZnNldCArIHRoaXMuX2FkanVzdGVkT2Zmc2V0O1xuICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IG9mZnNldCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRWaWV3Lm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VPdXRcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWSA9IDA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cbiAgICAgICAgdGhpcy5fbGlzdFJlZi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgdGhpcy5fc2VhcmNoUmVmLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZVN0YXR1c0JhckNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGRldmljZS5zZGtWZXJzaW9uID49IFwiMjFcIiAmJiBhbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eSkge1xuICAgICAgICAgICAgdmFyIG5hdGl2ZUNvbG9yID0gbmV3IENvbG9yKGNvbG9yKS5hbmRyb2lkO1xuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IGFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKG5hdGl2ZUNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=