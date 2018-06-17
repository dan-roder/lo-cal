import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'lo-cal-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {

  constructor(private localStorage: LocalStorage) { }

  ngOnInit() {
    // TODO: Destroy Bag and Order from LocalStorage
    this.localStorage.removeItem('order').subscribe(() => {});
    this.localStorage.removeItem('bag').subscribe(() => {});
  }

}
