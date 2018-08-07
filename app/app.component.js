"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GooglePlaces = require("nativescript-plugin-google-places");
var platform = require("tns-core-modules/platform");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        GooglePlaces.init();
        // Set initial PlaceId's
        setTimeout(function () {
            GooglePlaces.getPlacesById([
                "ChIJ4zPXqIiAhYAR31X3S64T6Uw",
                "ChIJ6zMe3oWAhYARaZ33Z1BAMRo",
                "ChIJAUWoGIaAhYARQ6zvky_f10Q"
            ])
                .then(function (places) {
                places.forEach(function (place) { return console.log(place.name); });
            })
                .catch(function (error) { return console.log(error); });
        }, 1000);
    }
    // Function to plick place whenever click on Pick Place button.
    AppComponent.prototype.pickPlace = function () {
        var _this = this;
        // Get location map initiallay.
        GooglePlaces.pickPlace()
            .then(function (place) {
            _this.place = place;
            console.log(place.types);
            _this.staticMapUrl = GooglePlaces.getStaticMapUrl(place, { width: platform.screen.mainScreen.widthDIPs, height: 250 });
        })
            .catch(function (error) { return console.log(error); });
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
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsZ0VBQWtFO0FBRWxFLG9EQUFzRDtBQU90RDtJQUlJO1FBQ0ksWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXBCLHdCQUF3QjtRQUN4QixVQUFVLENBQUM7WUFDUCxZQUFZLENBQUMsYUFBYSxDQUFDO2dCQUN2Qiw2QkFBNkI7Z0JBQzdCLDZCQUE2QjtnQkFDN0IsNkJBQTZCO2FBQ2hDLENBQUM7aUJBQ0csSUFBSSxDQUFDLFVBQUMsTUFBNEI7Z0JBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUVELCtEQUErRDtJQUMvRCxnQ0FBUyxHQUFUO1FBQUEsaUJBOEJDO1FBNUJHLCtCQUErQjtRQUMvQixZQUFZLENBQUMsU0FBUyxFQUFFO2FBQ25CLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDUCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFFeEMsMkRBQTJEO1FBRTNELDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsOEJBQThCO1FBQzlCLHlDQUF5QztRQUN6Qyw4REFBOEQ7UUFDOUQsK0NBQStDO1FBQy9DLG9DQUFvQztRQUNwQyxxSUFBcUk7UUFDckksaUVBQWlFO1FBQ2pFLGlCQUFpQjtRQUNqQix3Q0FBd0M7UUFDeEMseUlBQXlJO1FBQ3pJLHFFQUFxRTtRQUNyRSxtQkFBbUI7UUFDbkIsNEJBQTRCO1FBQzVCLFNBQVM7UUFDVCwyQ0FBMkM7SUFDL0MsQ0FBQztJQXBEUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O09BRVcsWUFBWSxDQXFEeEI7SUFBRCxtQkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIEdvb2dsZVBsYWNlcyBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UgfSBmcm9tICdpbWFnZS1zb3VyY2UnO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIHBsYWNlOiBHb29nbGVQbGFjZXMuUGxhY2U7XG4gICAgc3RhdGljTWFwVXJsOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIEdvb2dsZVBsYWNlcy5pbml0KCk7XG5cbiAgICAgICAgLy8gU2V0IGluaXRpYWwgUGxhY2VJZCdzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgR29vZ2xlUGxhY2VzLmdldFBsYWNlc0J5SWQoW1xuICAgICAgICAgICAgICAgIFwiQ2hJSjR6UFhxSWlBaFlBUjMxWDNTNjRUNlV3XCIsXG4gICAgICAgICAgICAgICAgXCJDaElKNnpNZTNvV0FoWUFSYVozM1oxQkFNUm9cIixcbiAgICAgICAgICAgICAgICBcIkNoSUpBVVdvR0lhQWhZQVJRNnp2a3lfZjEwUVwiXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIC50aGVuKChwbGFjZXM6IEdvb2dsZVBsYWNlcy5QbGFjZVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlcy5mb3JFYWNoKHBsYWNlID0+IGNvbnNvbGUubG9nKHBsYWNlLm5hbWUpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIHBsaWNrIHBsYWNlIHdoZW5ldmVyIGNsaWNrIG9uIFBpY2sgUGxhY2UgYnV0dG9uLlxuICAgIHBpY2tQbGFjZSgpIHtcblxuICAgICAgICAvLyBHZXQgbG9jYXRpb24gbWFwIGluaXRpYWxsYXkuXG4gICAgICAgIEdvb2dsZVBsYWNlcy5waWNrUGxhY2UoKVxuICAgICAgICAgICAgLnRoZW4ocGxhY2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2UgPSBwbGFjZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGFjZS50eXBlcyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljTWFwVXJsID0gR29vZ2xlUGxhY2VzLmdldFN0YXRpY01hcFVybChwbGFjZSwgeyB3aWR0aDogcGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzLCBoZWlnaHQ6IDI1MCB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcblxuICAgICAgICAvKiBDb21tZW50ZWQgY29kZSBmb3IgZnVydHVyZSB1c2UuIFBsZWFzZSBiZSB0aGF0IHRoZXJlLiAqL1xuXG4gICAgICAgIC8vIEdvb2dsZVBsYWNlcy5waWNrUGxhY2UoKVxuICAgICAgICAvLyAgICAgLnRoZW4ocGxhY2UgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxhY2UgPSBwbGFjZTtcbiAgICAgICAgLy8gICAgICAgICB2YXIgbXVsdGlwbGFjZXMgPSBwbGFjZS50eXBlcztcbiAgICAgICAgLy8gICAgICAgICB2YXIgc2VsZWN0ZWRwbGFjZSA9IG11bHRpcGxhY2VzLmluZGV4T2YocGxhY2VUeXBlKTtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInRoaXNwbGFjZVwiLHRoaXMucGxhY2UpO1xuICAgICAgICAvLyAgICAgICAgIGlmIChzZWxlY3RlZHBsYWNlID49IDApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zdGF0aWNNYXBVcmwgPSBHb29nbGVQbGFjZXMuZ2V0U3RhdGljTWFwVXJsKHBsYWNlLCB7IHdpZHRoOiBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMsIGhlaWdodDogMjUwIH0pO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRpY01hcFVybG1hcFwiLCB0aGlzLnN0YXRpY01hcFVybCk7XG4gICAgICAgIC8vICAgICAgICAgfWVsc2V7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChwbGFjZVR5cGUgPT0gJ2FsbCcpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljTWFwVXJsID0gR29vZ2xlUGxhY2VzLmdldFN0YXRpY01hcFVybChwbGFjZSwgeyB3aWR0aDogcGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzLCBoZWlnaHQ6IDI1MCB9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGljTWFwVXJsbWFwXCIsIHRoaXMuc3RhdGljTWFwVXJsKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSAgIFxuICAgICAgICAvLyAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfVxufVxuIl19