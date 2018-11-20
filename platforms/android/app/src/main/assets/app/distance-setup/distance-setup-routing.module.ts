import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DistanceSetupComponent } from "./distance-setup.component";

const routes: Routes = [
	{ path: "", component: DistanceSetupComponent }
];

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class DistanceSetupRoutingModule { }