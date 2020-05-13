import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as data from '../../../assets/json/YathiParampara.json';

import {SaintDetailsPage} from '../saint-details/saint-details.page';
import { SaintDetaileService } from 'src/app/saint-detaile.service';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  yatiList: any = (data as any).default;

  constructor(private router: Router,
    public saintService: SaintDetaileService) { }

  ngOnInit() {
  }

  saintDetailsPage(saint: any) {
    this.router.navigateByUrl('/saint-details');
    this.saintService.saintSubject.next(saint);
  }
}