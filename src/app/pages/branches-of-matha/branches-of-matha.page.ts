import { Component, OnInit } from '@angular/core';

import * as data from '../../../assets/json/branches.json';

interface BranchInfo {
  branch_name: string,
  incharge_person: string,
  branch_details: string,
  google_map: string,
  contact1: number,
  contact2: number,
  contact3: number
}

interface StateData {
  stateName: string,
  data: BranchInfo[]
}

@Component({
  selector: 'app-branches-of-matha',
  templateUrl: './branches-of-matha.page.html',
  styleUrls: ['./branches-of-matha.page.scss'],
})

export class BranchesOfMathaPage implements OnInit {
  branches: any = (data as any).default;
  public statesArray: Array <StateData> = [];

  constructor() { }

  ngOnInit() {
    const branchesKeys = Object.keys(this.branches);
    branchesKeys.forEach(state => {
      this.statesArray.push();
    });

    branchesKeys.forEach(state => {
      const dataArray = this.branches[state];
      const stateData: StateData = {stateName: state, data: dataArray} 
      console.log('stateData:',stateData);
      this.statesArray.push(stateData);
      dataArray.forEach(data => {
        console.log(data["branch_name"]);
      });
    });
    console.log(this.statesArray);
  }
}
