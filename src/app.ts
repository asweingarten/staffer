/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/fabricjs/fabricjs.d.ts" />

import {Component, View, bootstrap, For, If} from 'angular2/angular2';

/// ts:import=staffer,Staffer
import Staffer = require('./staffer'); ///ts:import:generated

/// ts:import=music,Music
import Music = require('./music'); ///ts:import:generated


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
    this.staff.init(new fabric.Canvas('staff'), null, null);
    this.staff.draw();
    this.staff.setKey(Music.Note.C());
  }

  setKey(key: string) {
      this.staff.setKey(key);
      this.activeKey = key;
  }

}

bootstrap(StafferApp);