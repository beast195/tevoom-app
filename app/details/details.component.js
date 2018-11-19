"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var enums_1 = require("tns-core-modules/ui/enums");
var platform_1 = require("tns-core-modules/platform");
var landmark_1 = require("../landmark");
var landmarks_service_1 = require("../landmarks-service");
var animations_service_1 = require("../animations-service");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(animationsService, landmarksService, routerExtensions) {
        this.animationsService = animationsService;
        this.landmarksService = landmarksService;
        this.routerExtensions = routerExtensions;
        this.imageOpacity = 1;
        this.dockedLabelOpacity = 0;
        this.dockedLabelTextOpacity = 0;
        this.offset = this.animationsService.animationOffset;
        this.landmark = this.landmarksService.getSelected();
    }
    DetailsComponent_1 = DetailsComponent;
    Object.defineProperty(DetailsComponent.prototype, "minHeight", {
        get: function () {
            return platform_1.screen.mainScreen.heightDIPs + 2 * DetailsComponent_1.IMAGE_MIN_HEIGHT;
        },
        enumerable: true,
        configurable: true
    });
    DetailsComponent.prototype.animateIn = function (view, duration, delay) {
        view.animate({
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            duration: duration,
            delay: delay,
            curve: enums_1.AnimationCurve.easeOut
        }).catch(function () { });
    };
    DetailsComponent.prototype.animateOut = function (view) {
        view.animate({
            opacity: 0,
            duration: 200
        }).catch(function () { });
    };
    DetailsComponent.prototype.onScroll = function (args) {
        var imageContainer = this.imageContainerRef.nativeElement;
        var offset = args.scrollY < 0 ? 0 : args.scrollY;
        var imageHeight = imageContainer.getActualSize().height;
        this.applyImageTransition(offset, imageHeight);
        this.applyTitleTransition(offset, imageHeight);
        this.applyDockHeaderTransition(offset, imageHeight);
    };
    DetailsComponent.prototype.onTap = function (args) {
        this.routerExtensions.back();
    };
    DetailsComponent.prototype.onNavigateTap = function () {
        this.routerExtensions.navigate(['/distance']);
        console.log("Button was pressed");
    };
    DetailsComponent.prototype.applyImageTransition = function (scrollOffset, imageHeight) {
        var imageContainer = this.imageContainerRef.nativeElement;
        var image = this.imageRef.nativeElement;
        var imageHeightMaxChange = imageHeight - DetailsComponent_1.IMAGE_MIN_HEIGHT;
        imageContainer.translateY = scrollOffset / 1.5;
        image.scaleX = 1 + scrollOffset / imageHeightMaxChange;
        image.scaleY = 1 + scrollOffset / imageHeightMaxChange;
        this.imageOpacity = 1 - scrollOffset / imageHeightMaxChange;
    };
    DetailsComponent.prototype.applyTitleTransition = function (scrollOffset, imageHeight) {
        var imageHeightMaxChange = imageHeight - DetailsComponent_1.IMAGE_MIN_HEIGHT;
        var title = this.titleRef.nativeElement;
        if (imageHeightMaxChange < scrollOffset) {
            title.translateX = -(scrollOffset - imageHeightMaxChange) / 1.2;
            title.translateY = -(scrollOffset - imageHeightMaxChange) * 2;
            title.scaleX = 1 - (scrollOffset - imageHeightMaxChange) / imageHeight;
            title.scaleY = 1 - (scrollOffset - imageHeightMaxChange) / imageHeight;
        }
        else {
            title.translateX = 0;
            title.translateY = 0;
            title.scaleX = 1;
            title.scaleY = 1;
        }
    };
    DetailsComponent.prototype.applyDockHeaderTransition = function (scrollOffset, imageHeight) {
        this.dockedLabelOpacity = this.imageOpacity <= 0 ? 1 : 0;
        this.dockedLabelTextOpacity = (scrollOffset - (imageHeight - DetailsComponent_1.IMAGE_MIN_HEIGHT)) / DetailsComponent_1.IMAGE_MIN_HEIGHT - 0.2;
    };
    DetailsComponent.IMAGE_MIN_HEIGHT = 48;
    __decorate([
        core_1.Input(),
        __metadata("design:type", landmark_1.Landmark)
    ], DetailsComponent.prototype, "landmark", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "offset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "imageOpacity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "dockedLabelOpacity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "dockedLabelTextOpacity", void 0);
    __decorate([
        core_1.ViewChild("imageContainer"),
        __metadata("design:type", core_1.ElementRef)
    ], DetailsComponent.prototype, "imageContainerRef", void 0);
    __decorate([
        core_1.ViewChild("image"),
        __metadata("design:type", core_1.ElementRef)
    ], DetailsComponent.prototype, "imageRef", void 0);
    __decorate([
        core_1.ViewChild("title"),
        __metadata("design:type", core_1.ElementRef)
    ], DetailsComponent.prototype, "titleRef", void 0);
    DetailsComponent = DetailsComponent_1 = __decorate([
        core_1.Component({
            selector: "Details",
            moduleId: module.id,
            templateUrl: "./details.component.html",
            styleUrls: ['./details.component.css']
        }),
        __metadata("design:paramtypes", [animations_service_1.AnimationsService,
            landmarks_service_1.LandmarksService,
            router_1.RouterExtensions])
    ], DetailsComponent);
    return DetailsComponent;
    var DetailsComponent_1;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxzREFBMEU7QUFFMUUsbURBQTJEO0FBRzNELHNEQUFtRDtBQUNuRCx3Q0FBdUM7QUFDdkMsMERBQXdEO0FBQ3hELDREQUEwRDtBQVExRDtJQVdDLDBCQUFvQixpQkFBb0MsRUFDL0MsZ0JBQWtDLEVBQ2xDLGdCQUFrQztRQUZ2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQy9DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVZsQyxpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6Qix1QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFDL0IsMkJBQXNCLEdBQVcsQ0FBQyxDQUFDO1FBVTNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO3lCQWpCVyxnQkFBZ0I7SUFtQjVCLHNCQUFJLHVDQUFTO2FBQWI7WUFDQyxNQUFNLENBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxrQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3RSxDQUFDOzs7T0FBQTtJQUVELG9DQUFTLEdBQVQsVUFBVSxJQUFVLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWixLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFF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UUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdEMsQ0FBQzt5Q0FZc0Msc0NBQWlCO1lBQzdCLG9DQUFnQjtZQUNoQix5QkFBZ0I7T0FiL0IsZ0JBQWdCLENBNEY1QjtJQUFELHVCQUFDOztDQUFBLEFBNUZELElBNEZDO0FBNUZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTGFuZG1hcmsgfSBmcm9tIFwiLi4vbGFuZG1hcmtcIjtcbmltcG9ydCB7IExhbmRtYXJrc1NlcnZpY2UgfSBmcm9tIFwiLi4vbGFuZG1hcmtzLXNlcnZpY2VcIjtcbmltcG9ydCB7IEFuaW1hdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMtc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiRGV0YWlsc1wiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2RldGFpbHMuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vZGV0YWlscy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCB7XG5cdEBJbnB1dCgpIGxhbmRtYXJrOiBMYW5kbWFyaztcblx0QElucHV0KCkgb2Zmc2V0OiBudW1iZXI7XG5cdEBJbnB1dCgpIGltYWdlT3BhY2l0eTogbnVtYmVyID0gMTtcblx0QElucHV0KCkgZG9ja2VkTGFiZWxPcGFjaXR5OiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBkb2NrZWRMYWJlbFRleHRPcGFjaXR5OiBudW1iZXIgPSAwO1xuXHRAVmlld0NoaWxkKFwiaW1hZ2VDb250YWluZXJcIikgaW1hZ2VDb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJpbWFnZVwiKSBpbWFnZVJlZjogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcInRpdGxlXCIpIHRpdGxlUmVmOiBFbGVtZW50UmVmO1xuXHRzdGF0aWMgSU1BR0VfTUlOX0hFSUdIVCA9IDQ4O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYW5pbWF0aW9uc1NlcnZpY2U6IEFuaW1hdGlvbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbGFuZG1hcmtzU2VydmljZTogTGFuZG1hcmtzU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblx0XHRcdFxuXHRcdHRoaXMub2Zmc2V0ID0gdGhpcy5hbmltYXRpb25zU2VydmljZS5hbmltYXRpb25PZmZzZXQ7XG5cdFx0dGhpcy5sYW5kbWFyayA9IHRoaXMubGFuZG1hcmtzU2VydmljZS5nZXRTZWxlY3RlZCgpO1xuXHR9XG5cblx0Z2V0IG1pbkhlaWdodCgpIHtcblx0XHRyZXR1cm4gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyArIDIgKiBEZXRhaWxzQ29tcG9uZW50LklNQUdFX01JTl9IRUlHSFQ7XG5cdH1cblxuXHRhbmltYXRlSW4odmlldzogVmlldywgZHVyYXRpb246IG51bWJlciwgZGVsYXk6IG51bWJlcikge1xuXHRcdHZpZXcuYW5pbWF0ZSh7XG5cdFx0XHRzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG5cdFx0XHR0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuXHRcdFx0ZHVyYXRpb246IGR1cmF0aW9uLFxuXHRcdFx0ZGVsYXk6IGRlbGF5LFxuXHRcdFx0Y3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VPdXRcblx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHR9XG5cblx0YW5pbWF0ZU91dCh2aWV3OiBWaWV3KSB7XG5cdFx0dmlldy5hbmltYXRlKHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0fVxuXG5cdG9uU2Nyb2xsKGFyZ3M6IFNjcm9sbEV2ZW50RGF0YSkge1xuXHRcdGxldCBpbWFnZUNvbnRhaW5lciA9IHRoaXMuaW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudDtcblx0XHRcblx0XHRsZXQgb2Zmc2V0ID0gYXJncy5zY3JvbGxZIDwgMCA/IDAgOiBhcmdzLnNjcm9sbFk7XG5cdFx0bGV0IGltYWdlSGVpZ2h0ID0gaW1hZ2VDb250YWluZXIuZ2V0QWN0dWFsU2l6ZSgpLmhlaWdodDtcblxuXHRcdHRoaXMuYXBwbHlJbWFnZVRyYW5zaXRpb24ob2Zmc2V0LCBpbWFnZUhlaWdodCk7XG5cdFx0dGhpcy5hcHBseVRpdGxlVHJhbnNpdGlvbihvZmZzZXQsIGltYWdlSGVpZ2h0KTtcblx0XHR0aGlzLmFwcGx5RG9ja0hlYWRlclRyYW5zaXRpb24ob2Zmc2V0LCBpbWFnZUhlaWdodCk7XG5cdH1cblxuXHRvblRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcblx0fVxuXHRcbiAgICBvbk5hdmlnYXRlVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvZGlzdGFuY2UnXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgIH1cblxuXHRwcml2YXRlIGFwcGx5SW1hZ2VUcmFuc2l0aW9uKHNjcm9sbE9mZnNldDogbnVtYmVyLCBpbWFnZUhlaWdodDogbnVtYmVyKSB7XG5cdFx0bGV0IGltYWdlQ29udGFpbmVyID0gdGhpcy5pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdGxldCBpbWFnZSA9IHRoaXMuaW1hZ2VSZWYubmF0aXZlRWxlbWVudDtcblx0XHRsZXQgaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPSBpbWFnZUhlaWdodCAtIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVDtcblxuXHRcdGltYWdlQ29udGFpbmVyLnRyYW5zbGF0ZVkgPSBzY3JvbGxPZmZzZXQgLyAxLjU7XG5cdFx0aW1hZ2Uuc2NhbGVYID0gMSArIHNjcm9sbE9mZnNldCAvIGltYWdlSGVpZ2h0TWF4Q2hhbmdlO1xuXHRcdGltYWdlLnNjYWxlWSA9IDEgKyBzY3JvbGxPZmZzZXQgLyBpbWFnZUhlaWdodE1heENoYW5nZTtcblx0XHR0aGlzLmltYWdlT3BhY2l0eSA9IDEgLSBzY3JvbGxPZmZzZXQgLyBpbWFnZUhlaWdodE1heENoYW5nZTtcblx0fVxuXG5cdHByaXZhdGUgYXBwbHlUaXRsZVRyYW5zaXRpb24oc2Nyb2xsT2Zmc2V0OiBudW1iZXIsIGltYWdlSGVpZ2h0OiBudW1iZXIpIHtcblx0XHRsZXQgaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPSBpbWFnZUhlaWdodCAtIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVDtcblx0XHRsZXQgdGl0bGUgPSB0aGlzLnRpdGxlUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHRpZiAoaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPCBzY3JvbGxPZmZzZXQpIHtcblx0XHRcdHRpdGxlLnRyYW5zbGF0ZVggPSAtKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAvIDEuMjtcblx0XHRcdHRpdGxlLnRyYW5zbGF0ZVkgPSAtKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAqIDI7XG5cdFx0XHR0aXRsZS5zY2FsZVggPSAxIC0gKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAvIGltYWdlSGVpZ2h0O1xuXHRcdFx0dGl0bGUuc2NhbGVZID0gMSAtIChzY3JvbGxPZmZzZXQgLSBpbWFnZUhlaWdodE1heENoYW5nZSkgLyBpbWFnZUhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGl0bGUudHJhbnNsYXRlWCA9IDA7XG5cdFx0XHR0aXRsZS50cmFuc2xhdGVZID0gMDtcblx0XHRcdHRpdGxlLnNjYWxlWCA9IDE7XG5cdFx0XHR0aXRsZS5zY2FsZVkgPSAxO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYXBwbHlEb2NrSGVhZGVyVHJhbnNpdGlvbihzY3JvbGxPZmZzZXQ6IG51bWJlciwgaW1hZ2VIZWlnaHQ6IG51bWJlcikge1xuXHRcdHRoaXMuZG9ja2VkTGFiZWxPcGFjaXR5ID0gdGhpcy5pbWFnZU9wYWNpdHkgPD0gMCA/IDEgOiAwO1xuXHRcdHRoaXMuZG9ja2VkTGFiZWxUZXh0T3BhY2l0eSA9IChzY3JvbGxPZmZzZXQgLSAoaW1hZ2VIZWlnaHQgLSBEZXRhaWxzQ29tcG9uZW50LklNQUdFX01JTl9IRUlHSFQpKSAvIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVCAtIDAuMjtcblx0fVxufSJdfQ==