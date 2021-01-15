import { Component, OnInit } from '@angular/core';
import {NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  public isCollapsed = false;

  constructor() { }
  
  ngOnInit(): void {
  }
}
