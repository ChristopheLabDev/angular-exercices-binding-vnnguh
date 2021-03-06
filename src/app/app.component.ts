import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data: any[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log(this.dataService.getUsersData());
    this.data = this.dataService.getUsersData()
  }
}
