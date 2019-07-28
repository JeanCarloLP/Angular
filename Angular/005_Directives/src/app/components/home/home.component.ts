import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy } from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {

  constructor() {
    console.log('contructor');
  }

  ngOnInit() {
    console.log('ngOnInit()');
  }
  ngOnChanges() {
    console.log('ngOnChanges()');
  }
  ngDoCheck() {
    console.log('ngDoCheck()');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit()');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked()');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy()');
  }
}
