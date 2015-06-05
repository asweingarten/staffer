/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/fabricjs/fabricjs.d.ts" />

import {Component, View, bootstrap, For, If} from 'angular2/angular2';

/// ts:import=staffer,Staffer
import Staffer = require('./staffer'); ///ts:import:generated

import {Note} from './music';
/// ts:import=cof,COF
import COF = require('./cof'); ///ts:import:generated


// Annotation section
@Component({
  selector: 'my-app'
})

@View({
  directives: [For, If],
  templateUrl: 'templates/app.html',
})

// Component controller
class StafferApp {
  name: string;
  keys: string[];
  activeKey: string;
  staff;
  
  constructor() {
    this.staff = Staffer;
    this.staff.key = COF[Note.C().noteName()];
    this.staff.init(new fabric.Canvas('staff'),
     [Note.C(), Note.D(), Note.E(), Note.F(), Note.G(), Note.A(), Note.B(), Note.C(6)],
     null);
    this.staff.draw();
  }

  setKey(key: string) {
      this.staff.setKey(key);
      this.activeKey = key;
  }

}

bootstrap(StafferApp);
