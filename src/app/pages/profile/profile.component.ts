import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { User } from 'src/app/core/models/User';
import { Observable } from 'rxjs';
import { listChanges, AngularFireList } from '@angular/fire/database';
import { transition, trigger, query, style, stagger, animate, keyframes, sequence } from '@angular/animations';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('*<=>*', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-200px)' }),
          stagger(100, [
            animate('500ms 400ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' }))
          ])
        ]),
        // query(':leave', [
        //   style({ opacity: 1, transform: 'none' }),
        //   stagger(-100, [
        //     animate('10ms cubic-bezier(0.35, 0, 0.25, 1)',
        //       style({ opacity: 0, transform: 'translateY(+200px)' }))
        //   ])
        // ])
      ])
    ]),
  ]
})
export class ProfileComponent implements OnInit {
  user: User;
  profile: HTMLElement;
  editBlock: HTMLElement;
  htmlele: HTMLElement;
  list: AngularFireList<any[]>;
  friendsList;
  posts;

  constructor(private service: UserService) {
    this.user = new User(null, 'testuser', 'test@test.com', 'Test', 'User');
  }

  ngOnInit() {
    //this.user=this.service.getUser();
    this.profile = document.getElementById("profile") as HTMLElement;
    this.profile.style.display = "flex";
    this.editBlock = document.getElementById("editBlock") as HTMLElement;
    this.editBlock.style.display = "none";

    //get from server
    this.getFromServer();

  }

  getFromServer() {
    this.friendsList = ['../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png'];

    this.posts = ['Cras justo odio'
      , 'Dapibus ac facilisis'
      , 'Morbi leo risus'
      , 'Porta ac consectetur '
      , 'Vestibulum at eros'
      , 'Cras justo odio']
  }


edit() {
  this.user.fname = (document.getElementById("edit-fname") as HTMLInputElement).value;
  this.user.lname = (document.getElementById("edit-lname") as HTMLInputElement).value;
  this.user.username = (document.getElementById("edit-uname") as HTMLInputElement).value;
  this.user.email = (document.getElementById("edit-email") as HTMLInputElement).value;
  //this.service.setUser(this.user.uid);
  this.ngOnInit();
}

showEdit() {
  this.profile = document.getElementById("profile") as HTMLElement;
  this.profile.style.display = "none";
  this.editBlock = document.getElementById("editBlock") as HTMLElement;
  this.editBlock.style.display = "block";
}

deletePost(id) {

  console.log(id);
  var r = confirm("Delete post?");
  if (r == true) {
    this.htmlele = document.getElementById(id) as HTMLElement;
    this.htmlele.parentNode.removeChild(this.htmlele);
  }
}


}
