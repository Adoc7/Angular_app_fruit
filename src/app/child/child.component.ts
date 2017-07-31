import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() public fruit: string;
@Output() public deleted: EventEmitter <string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  deleteFruit() {
    this.deleted.emit(this.fruit);
  }
}
