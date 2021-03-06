import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AnimationsService } from "./animations-service";
import { LandmarksService } from "./landmarks-service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AnimationsService,
        LandmarksService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
