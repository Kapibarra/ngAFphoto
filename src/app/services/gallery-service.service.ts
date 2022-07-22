import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {

  constructor() { 

  }
  private client = createClient({
    space: environment.spaceId,
accessToken: environment.accessToken,
  })
  getAllEntries() {
    this.client.getEntries().then((entries:any) => { console.log(entries);
    })
  }
}
