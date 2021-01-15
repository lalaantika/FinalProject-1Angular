import { Component, OnInit } from '@angular/core';
import { UserAuthserviceService } from '../services/user-authservice.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(public authService: UserAuthserviceService) { }

  ngOnInit(): void {
  }
  
  reload(){
    setTimeout(function(){
    location.reload();
    },1000); 
  }
}
