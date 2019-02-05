import {AfterContentInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {UserService} from '../../core/services/user/user.service';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'explore2',
  templateUrl: './explore2.component.html',
  styleUrls: ['./explore2.component.css'],
  animations: [
    trigger('cardFlip', [
      state('hover', style({
        transform: 'rotateY(180deg)'
      })),
      state('unhover', style({

      })),
      transition('hover => unhover', [
        animate('.3s')
      ]),
      transition('unhover => hover', [
        animate('.3s')
      ])
    ]),
  ]
})
export class Explore2Component implements OnInit, AfterContentInit, OnDestroy {
  currentState = 'initial';
  watcher: Subscription;
  activeMediaQuery = '';
  currentIndex = '';
  cols = 8;
  selected = '';
  data = [];
  categories = [
    {value: 'sports', viewValue: 'Sports'},
    {value: 'film', viewValue: 'Film'},
    {value: 'music', viewValue: 'Music'},
  ];

  constructor(
    private _userService: UserService,
    private _mediaObserver: MediaObserver
  ) {
    this.watcher = _mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      console.log(change.mediaQuery);
      if ( change.mqAlias === 'xs') {
        this.cols = 1;
      } else if ( change.mqAlias === 'sm') {
        this.cols = 2;
      } else if (change.mqAlias === 'md') {
        this.cols = 4;
      } else if ( change.mqAlias === 'lg') {
        this.cols = 6;
      } else if ( change.mqAlias === 'xl') {
        this.cols = 8;
      }
    });
  }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  changeCategory() {
    this._userService.getUsersByCategory(this.selected)
      .subscribe(data => {
        this.data = data;
        console.log(data);
      });
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  onClick(index) {
    this.currentIndex = index;
  }
}
