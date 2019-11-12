import {
  Component,
  OnInit,
  Input,
  OnDestroy
} from '@angular/core';

import {
  DataShareService
} from '../../../data-share.service';

import {
  HttpService
} from '../../../http.service'

import {
  Subscription
} from 'rxjs';

@Component({
  selector: 'app-battle-elements',
  templateUrl: './battle-elements.component.html',
  styleUrls: ['./battle-elements.component.scss']
})
export class BattleElementsComponent implements OnDestroy {

  battles: any;
  subscription: Subscription;

  constructor(private dataShare: DataShareService, private httpService: HttpService) {
    this.subscription = dataShare.getLocation$.subscribe(
      loc => {
        const body = {
          location: loc
        }
        this.httpService.searchBattles(body).subscribe(res => {
          console.log(res);
          this.battles = res['data'];
        }, (err) => {
          console.log(err);
        });
        console.log('get battles === ', this.battles);
      });
  }

  ngOnInit() {
    this.httpService.searchBattles({}).subscribe(res => {
      console.log(res);
      this.battles = res['data'];
    }, (err) => {
      console.log(err);
    });
  }


  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
