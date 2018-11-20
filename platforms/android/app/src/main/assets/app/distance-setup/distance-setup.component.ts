import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';
import { ActivatedRoute } from "@angular/router";
import { DistanceSetupsService } from "./distance-setup.service";
import { RadAutoCompleteTextViewComponent } from "nativescript-ui-autocomplete/angular/autocomplete-directives";
import { from } from 'rxjs';
import 'rxjs/add/observable/of';

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
	places = [];
	@ViewChild("autocomplete") autocomplete: RadAutoCompleteTextViewComponent;

	private googlePlacesAtutoComplete: GooglePlacesAutocomplete;
	constructor(private distanceSetupService: DistanceSetupsService,private route: ActivatedRoute) {

		this.googlePlacesAtutoComplete = new GooglePlacesAutocomplete('AIzaSyBKHMVCsGXT3wzJxO0hCsh_enpT8ZDQZ8c');
		this.paramsSubscription = this.route.params.subscribe(params => {
			this.userName = params['name'];
		});
	}


	autoCompletePlaceO(searchText) {
		console.log(searchText.value);
		this.googlePlacesAtutoComplete.search(searchText.value)
			.then((places: any[]) => {
				// place predictions list
				this.places = places;

				//origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE
				console.log(places.map(c => c.description));
			}, (error => {
				console.log(error)
			}));
	}

	autoCompletePlaceD(searchText) {
		this.googlePlacesAtutoComplete.search(searchText.value)
			.then((places: any) => {
				// place predictions list
				console.log(places);
			}, (error => {
				console.log(error)
			}));
	}

	getDistanceCalculation(){
		

				//origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE
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

	 public onDidAutoComplete(args) {
        console.log(args.text);
	}
	



}