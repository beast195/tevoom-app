import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { DistanceSetupRoutingModule } from "./distance-setup-routing.module";
import { DistanceSetupComponent } from "./distance-setup.component";
import { ActionButtonModule } from "../action-button/action-button.module";
import { DistanceSetupsService } from "./distance-setup.service";
import { FormsModule } from "@angular/forms";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		DistanceSetupRoutingModule,
		NativeScriptFormsModule,
		ActionButtonModule,
		FormsModule
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