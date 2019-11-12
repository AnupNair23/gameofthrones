import {
  Injectable
} from '@angular/core';
import {
  Subject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private getLocation = new Subject < string > ();
  private giveLocation = new Subject < string > ();

  getLocation$ = this.getLocation.asObservable();
  giveLocation$ = this.giveLocation.asObservable();

  storeData(location: string) {
    this.getLocation.next(location);
  }

  giveData(location: string) {
    this.giveLocation.next(location);
  }

}
