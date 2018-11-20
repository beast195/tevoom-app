import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';
import { ActivatedRoute } from "@angular/router";
import { DistanceSetupsService } from "./distance-setup.service";

@Component({
	selector: "DistanceSetup",
	moduleId: module.id,
	templateUrl: "./distance-setup.component.html",
	styleUrls: ['./distance-setup.component.css']
})
export class DistanceSetupComponent {
	paramsSubscription;
	userName;
	origin;
	destination;
	private googlePlacesAtutoComplete: GooglePlacesAutocomplete;
	constructor(private distanceSetupService: DistanceSetupsService,private route: ActivatedRoute) {

		this.googlePlacesAtutoComplete = new GooglePlacesAutocomplete('AIzaSyBKHMVCsGXT3wzJxO0hCsh_enpT8ZDQZ8');
		this.paramsSubscription = this.route.params.subscribe(params => {
			this.userName = params['name'];
		});
	}


	autoCompletePlaceO(searchText) {
		this.googlePlacesAtutoComplete.search(searchText)
			.then((places: any) => {
				// place predictions list
			}, (error => {
				console.log(error)
			}));
	}

	autoCompletePlaceD(searchText) {
		this.googlePlacesAtutoComplete.search(searchText)
			.then((places: any) => {
				// place predictions list
			}, (error => {
				console.log(error)
			}));
	}

	getDistanceCalculation(){
		this.distanceSetupService.getDistanceSetup(this.origin, this.destination)
		.subscribe(
			data => {
			  console.log(data);
			 
			},
			errorResponse => {
			  console.log(errorResponse);			 
			}
		  );
	}


}