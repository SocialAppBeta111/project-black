import {AfterContentInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {UserService} from '../../core/services/user/user.service';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';
import {SubscribeService} from '../../core/services/subscribe/subscribe.service';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'explore2',
  templateUrl: './explore2.component.html',
  styleUrls: ['./explore2.component.css'],
  animations: [
    trigger('cardZoom', [
      state('end', style({
        zIndex: '1',
        width: '100%',
        height: '100%',
        bottom: '0px',
        top: '0px',
        left: '0',
        position: 'fixed',
        opacity: '1'
      })),
      state('initial', style({
      })),
      transition('initial => end', [
        animate('.3s')
      ]),
      transition('initial => end', [
        animate('0s')
      ])
    ])
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Explore2Component implements OnInit, AfterContentInit, OnDestroy {
  auth: any;
  subscriptions: any[];
  currentState = 'initial';
  watcher: Subscription;
  activeMediaQuery = '';
  currentIndex = '';
  itemImage = '';
  cardFillIndex = '';
  cols = 8;
  selected = '';
  data = [];
  categories = [
    {value: 'sports', viewValue: 'Sports'},
    {value: 'film', viewValue: 'Film'},
    {value: 'music', viewValue: 'Music'},
  ];

  constructor(
    private _authService: AuthService,
    private _subscribeService: SubscribeService,
    private _userService: UserService,
    private _mediaObserver: MediaObserver
  ) {
    // this.auth = this._authService.getAuth().value;
    // console.log(this.auth);
    // this._subscribeService.setSubscriptions(this.auth);

    this._subscribeService.$subscribers.subscribe(data => {
      console.log(data);
      this.subscriptions = data;
    });

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

  containsId = (id): boolean => {
    return this.subscriptions.some(function(i) { return i.subscriberId === id; });
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

  onClick(uid, image) {
    event.preventDefault();
    event.stopPropagation();
    console.log(uid);
    if (this.cardFillIndex === uid) {
      this.cardFillIndex = null;
      this.itemImage = null;
      // this.cardFillState = 'end';
    } else  {
      this.cardFillIndex = uid;
      this.itemImage = image;
      // this.cardFillState = 'initial';
    }
    console.log(this.cardFillIndex);
  }
}
