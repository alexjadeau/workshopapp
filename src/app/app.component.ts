import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
  logMe(e) {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    const etudiant = 'etudiant', pedago = 'pedago', intervenant = 'intervenant';
    if (username === etudiant && password === etudiant) {
      window.location.href = 'http://localhost/etudiant.html';
    } else
    if (username === pedago && password === pedago) {
      window.location.href = 'http://localhost/espace_pedago.html';
    } else
    if (username === intervenant && password === intervenant) {
      window.location.href = 'http://localhost/intervenant.html';
    } else
    if (username === pedago || username === etudiant || username === intervenant) {
      alert('Erreur de mot de passe');
    } else {
      alert('Erreur, identifiant erroné ou non inscrit');
    }
  }
}

