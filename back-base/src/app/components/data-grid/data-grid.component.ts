import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  ColumnProp
} from 'src/app/models/column-prop.model';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() dataToRender$: Observable < any > ;
  @Input() displayedColumns: ColumnProp[];
  columnsToDisplay = [];
  constructor() {}

  ngOnInit() {
    this.displayedColumns.forEach(column => this.columnsToDisplay.push(column.prop));
  }

}
