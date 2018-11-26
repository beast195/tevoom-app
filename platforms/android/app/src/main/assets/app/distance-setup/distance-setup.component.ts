import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';
import { ActivatedRoute } from "@angular/router";
import { DistanceSetupsService } from "./distance-setup.service";
import { from } from 'rxjs';

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
	originId = null;
	destinationId = null;
	originplaces = [];
	destplaces = [];
	distance = 0;
	total = 0;

	private googlePlacesAtutoComplete: GooglePlacesAutocomplete;
	constructor(private distanceSetupService: DistanceSetupsService,private route: ActivatedRoute) {

		this.googlePlacesAtutoComplete = new GooglePlacesAutocomplete('AIzaSyBKHMVCsGXT3wzJxO0hCsh_enpT8ZDQZ8c');
		this.paramsSubscription = this.route.params.subscribe(params => {
			this.userName = params['name'];
		});
	}


	autoCompletePlaceO(searchText) {
		console.log(searchText.value);
		if(this.originId == null) {		
		this.googlePlacesAtutoComplete.search(searchText.value)
			.then((places: any[]) => {
				// place predictions list
				this.originplaces = places;

				//origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE
				//placeId
				console.log(places.map(c => c.description));
			}, (error => {
				console.log(error)
			}));
		}
	}

	autoCompletePlaceD(searchText) {
		if(this.destinationId == null) {		
		this.googlePlacesAtutoComplete.search(searchText.value)
			.then((places: any) => {
				// place predictions list
				this.destplaces = places;
			}, (error => {
				console.log(error)
			}));
		}
	}

	getDistanceCalculation(){		

		//origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE
		this.distanceSetupService.getDistanceSetup(this.originId, this.destinationId)
		.subscribe(
			data => {
			  console.log(data);
			  this.distance = data.routes[0].legs[0].distance.value / 1000;
			  this.total = this.distance * 2.5;
			 
			},
			errorResponse => {
			  console.log(errorResponse);			 
			}
		  );
	}

	 selectAddressOrigin(placeId, addresText){
		 // assign address id
		 this.originId = 'place_id:' + placeId;
		 // assign address text
		 this.origin = addresText;
		 // clear places array
		 this.originplaces = [];

	 }

	 selectAddressDestination(placeId, addresText){

		// assign address text to destId
		this.destinationId = 'place_id:' + placeId;
		 // assign placeId to dest
		 this.destination = addresText;
		 // clear places array
		 this.destplaces = [];

	}
	



}