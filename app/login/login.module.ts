import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { loginRouting } from "./login.routing";
import { LoginComponent } from "./login.component";
import { LoginService, BackendService } from "~/shared";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService,
        BackendService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
