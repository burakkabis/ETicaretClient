import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
//import { AlertifyService, MessageType,Position } from 'src/admin/services/admin/alertify.service';
import { AlertifyService,Position,MessageType } from '../../../services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private alertify: AlertifyService){}

  ngOnInit():void{ 


  }

  m()
  {

    this.alertify.message("Merhaba",MessageType.Error,Position.BottomLeft,15)

  }
  d()
  {
    this.alertify.dismiss();
  }

}


