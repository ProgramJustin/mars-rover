import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiPhotos } from '../mars-rover-api-photos.service';
import { Photo } from '../photo.model';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [ MarsRoverApiPhotos, PhotoService ]
})
export class RoverFormComponent {

  photos: any[]=null;
   noPhotos: boolean=false;
  constructor(private marsRoverPhotos: MarsRoverApiPhotos) { }

  saveRoverImages(date, camera){
    this.marsRoverPhotos.saveImages(date, camera);
    alert("The images from " + date + " taken by the " + camera + " camera have been saved to the database.")
  }


  getRoverImages(date: string, camera: string) {

    this.noPhotos = false;
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
      if(response.json().photos.length > 0)
    {
      this.photos = response.json();
    }
    else {
      this.noPhotos = true;
    }
    });
  }

}
