"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_landmarks_1 = require("./mock-landmarks");
var LandmarksService = /** @class */ (function () {
    function LandmarksService() {
        this._selectedId = -1;
    }
    LandmarksService.prototype.getLandmarks = function () {
        return mock_landmarks_1.LANDMARKS;
    };
    LandmarksService.prototype.getLandmark = function (id) {
        return mock_landmarks_1.LANDMARKS.filter(function (landmark) { return landmark.id === id; })[0];
    };
    LandmarksService.prototype.setSelectedId = function (id) {
        if (id < mock_landmarks_1.LANDMARKS.length) {
            this._selectedId = id;
        }
    };
    LandmarksService.prototype.getSelected = function () {
        return this._selectedId < 0 ? null : this.getLandmark(this._selectedId);
    };
    LandmarksService = __decorate([
        core_1.Injectable()
    ], LandmarksService);
    return LandmarksService;
}());
exports.LandmarksService = LandmarksService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZG1hcmtzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5kbWFya3Mtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxtREFBNkM7QUFHN0M7SUFEQTtRQUVZLGdCQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFtQjdCLENBQUM7SUFqQkcsdUNBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQywwQkFBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNsQixNQUFNLENBQUMsMEJBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCx3Q0FBYSxHQUFiLFVBQWMsRUFBVTtRQUNwQixFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsMEJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBbkJRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO09BQ0EsZ0JBQWdCLENBb0I1QjtJQUFELHVCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMYW5kbWFyayB9IGZyb20gXCIuL2xhbmRtYXJrXCI7XG5pbXBvcnQgeyBMQU5ETUFSS1MgfSBmcm9tIFwiLi9tb2NrLWxhbmRtYXJrc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZG1hcmtzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJZCA9IC0xO1xuXG4gICAgZ2V0TGFuZG1hcmtzKCk6IExhbmRtYXJrW10ge1xuICAgICAgICByZXR1cm4gTEFORE1BUktTO1xuICAgIH1cblxuICAgIGdldExhbmRtYXJrKGlkOiBudW1iZXIpOiBMYW5kbWFyayB7XG4gICAgICAgIHJldHVybiBMQU5ETUFSS1MuZmlsdGVyKGxhbmRtYXJrID0+IGxhbmRtYXJrLmlkID09PSBpZClbMF07XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0ZWRJZChpZDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpZCA8IExBTkRNQVJLUy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSWQgPSBpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNlbGVjdGVkKCk6IExhbmRtYXJrIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSWQgPCAwID8gbnVsbCA6IHRoaXMuZ2V0TGFuZG1hcmsodGhpcy5fc2VsZWN0ZWRJZCk7XG4gICAgfVxufSJdfQ==