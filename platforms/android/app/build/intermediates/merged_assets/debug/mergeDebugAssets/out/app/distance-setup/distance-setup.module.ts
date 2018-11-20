import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { DistanceSetupRoutingModule } from "./distance-setup-routing.module";
import { DistanceSetupComponent } from "./distance-setup.component";
import { ActionButtonModule } from "../action-button/action-button.module";
import { DistanceSetupsService } from "./distance-setup.service";

@NgModule({
	imports: [
		NativeScriptUISideDrawerModule,
		NativeScriptUIListViewModule,
		NativeScriptUICalendarModule,
		NativeScriptUIChartModule,
		NativeScriptUIDataFormModule,
		NativeScriptUIAutoCompleteTextViewModule,
		NativeScriptUIGaugeModule,
		NativeScriptCommonModule,
		DistanceSetupRoutingModule,
		NativeScriptFormsModule,
		ActionButtonModule
	],
	declarations: [
		DistanceSetupComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
    providers: [
        DistanceSetupsService
    ]
})
export class DistanceSetupModule { }