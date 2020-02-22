import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireDbService } from '../fire-db.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public db: FireDbService, public AFD: AngularFireDatabase, private router: Router) { }

  items = [];

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
