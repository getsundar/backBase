import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Observable
} from 'rxjs';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() dataToRender$: Observable < any > ;
  @Input() displayedColumns: string[];

  constructor() {}

  ngOnInit() {}

}
