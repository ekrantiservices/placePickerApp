import { Component } from "@angular/core";
import * as GooglePlaces from 'nativescript-plugin-google-places';
import { ImageSource } from 'image-source';
import * as platform from "tns-core-modules/platform";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    place: GooglePlaces.Place;
    staticMapUrl: string;
    constructor() {
        GooglePlaces.init();

        // Set initial PlaceId's
        setTimeout(() => {
            GooglePlaces.getPlacesById([
                "ChIJ4zPXqIiAhYAR31X3S64T6Uw",
                "ChIJ6zMe3oWAhYARaZ33Z1BAMRo",
                "ChIJAUWoGIaAhYARQ6zvky_f10Q"
            ])
                .then((places: GooglePlaces.Place[]) => {
                    places.forEach(place => console.log(place.name));
                })
                .catch(error => console.log(error));
        }, 1000)
    }

    // Function to plick place whenever click on Pick Place button.
    pickPlace() {

        // Get location map initiallay.
        GooglePlaces.pickPlace()
            .then(place => {
                this.place = place;
                console.log(place.types);                
                this.staticMapUrl = GooglePlaces.getStaticMapUrl(place, { width: platform.screen.mainScreen.widthDIPs, height: 250 });
            })
            .catch(error => console.log(error));

        /* Commented code for furture use. Please be that there. */

        // GooglePlaces.pickPlace()
        //     .then(place => {
        //         this.place = place;
        //         var multiplaces = place.types;
        //         var selectedplace = multiplaces.indexOf(placeType);
        //         console.log("thisplace",this.place);
        //         if (selectedplace >= 0) {
        //             this.staticMapUrl = GooglePlaces.getStaticMapUrl(place, { width: platform.screen.mainScreen.widthDIPs, height: 250 });
        //             console.log("staticMapUrlmap", this.staticMapUrl);
        //         }else{
        //             if (placeType == 'all') {
        //                 this.staticMapUrl = GooglePlaces.getStaticMapUrl(place, { width: platform.screen.mainScreen.widthDIPs, height: 250 });
        //                 console.log("staticMapUrlmap", this.staticMapUrl);
        //             }   
        //         }                
        //     })
        //     .catch(error => console.log(error));
    }
}
