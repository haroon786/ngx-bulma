import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bu-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulmaCardHeaderComponent implements OnInit {
  @HostBinding('class') class = 'card-header';

  constructor() {}

  ngOnInit() {}
}
