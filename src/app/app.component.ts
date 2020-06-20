import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular835';
  private geoCoder:any;

constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone ){
  // if (navigator)
  // {
  // navigator.geolocation.getCurrentPosition( position => {
  //     console.log(position)
  //     this.getAddress(position.coords.latitude, position.coords.longitude)
  //   });
  // }



}
ngOnInit(){
  // this.mapsAPILoader.load().then(() => {
  //   this.geoCoder = new google.maps.Geocoder();
  // });
}
getAddress(latitude, longitude) {
  this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
    console.log(results);
    console.log(status);
    if (status === 'OK') {
      if (results[0]) {
        
       console.log(results[0].formatted_address);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }

  });
}
}
