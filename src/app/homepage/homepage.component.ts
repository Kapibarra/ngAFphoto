import { Component, OnInit } from '@angular/core';
import { GalleryServiceService } from '../services/gallery-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private galleryServiceService:GalleryServiceService) { }

  ngOnInit(): void {
    this.galleryServiceService.getAllEntries()
  }

}
