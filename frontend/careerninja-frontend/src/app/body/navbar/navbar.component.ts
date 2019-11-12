import {
  Component,
  OnInit
} from '@angular/core';

import {
  HttpService
} from '../../../app/http.service';

import {
  catchError,
  map,
  tap
} from 'rxjs/operators';

import {
  DataShareService
} from '../../../app/data-share.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  locations: any;
  battles: any;
  constructor(private httpService: HttpService, private dataShare: DataShareService) {}

  ngOnInit() {
    // calling battles api for the navbar
    this.httpService.getLocationData().subscribe(res => {
      console.log(res);
      this.locations = res['data'];
    }, (err) => {
      console.log(err);
    });

  }

  selectEvent(item) {
    // do something with selected item
    console.log(item);
    this.dataShare.storeData(item);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

}
