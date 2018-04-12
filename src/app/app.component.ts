import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TIME';

  banana() {
    const epsi = document.getElementById('epsi');
    const connect = document.getElementById('connect');
    let round, i;
    epsi.style.opacity = '0';
    connect.style.zIndex = '2';
    connect.style.opacity = '1';
    for (i = 0; i < 3; i++) {
      round = document.getElementsByClassName('round')[i];
      if (window.innerHeight > window.innerWidth) {
        round.style.height = '30vw';
        round.style.width = '30vw';
      } else {
        round.style.height = '10vw';
        round.style.width = '10vw';
      }
    }
  }
  close() {
    const epsi = document.getElementById('epsi');
    const connect = document.getElementById('connect');
    let round, i;
    epsi.style.opacity = '1';
    connect.style.zIndex = '-1';
    connect.style.opacity = '0';
    for (i = 0; i < 3; i++) {
      round = document.getElementsByClassName('round')[i];
      round.style.height = '0';
      round.style.width = '0';
    }
  }
  openF() {
    const form = document.getElementById('loginP');
    let round, i;
    form.style.opacity = '1';
    form.style.zIndex = '2';
    if (window.innerHeight > window.innerWidth) {
      form.style.height = '50vh';
      form.style.width = '80vw';
    } else {
      form.style.height = '40vh';
      form.style.width = '40vw';
    }
    for (i = 0; i < 3; i++) {
      round = document.getElementsByClassName('round')[i];
      round.style.opacity = '0';
    }
  }
  closeF() {
    const form = document.getElementById('loginP');
    let round, i;
    form.style.opacity = '0';
    form.style.zIndex = '-1';
    form.style.height = '0';
    form.style.width = '0';
    for (i = 0; i < 3; i++) {
      round = document.getElementsByClassName('round')[i];
      round.style.opacity = '1';
    }
  }
}

