import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SaintDetaileService } from 'src/app/saint-detaile.service';

@Component({
  selector: 'app-saint-details',
  templateUrl: './saint-details.page.html',
  styleUrls: ['./saint-details.page.scss'],
})
export class SaintDetailsPage implements OnInit{
  public saintObject: any = undefined;

  constructor(
    public saintService: SaintDetaileService
  ) { }

  ngOnInit() {
    this.saintService.saintSubject.subscribe((data) => {
      this.saintObject = data;
    });
  }
}
