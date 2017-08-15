import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../../services/wp.service';

@Component({
  selector: 'lo-cal-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public footerMenu;

  constructor(private wpService : WordpressService) {  }

  ngOnInit() {
    this.wpService.getMenu(3).subscribe(m => this.footerMenu = m.items);
  }

}
