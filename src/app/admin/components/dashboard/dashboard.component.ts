import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
//import { AlertifyService, MessageType,Position } from 'src/admin/services/admin/alertify.service';
import { AlertifyService,Position,MessageType } from '../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent implements OnInit {

  constructor(private alertify: AlertifyService,spinner:NgxSpinnerService){

    super(spinner)
  }

  ngOnInit():void{ 

    this.showSpinner(SpinnerType.BallAtom)
  }

  m()
  {

    this.alertify.message("Merhaba",{
      messageType:MessageType.Success,
      delay:5,
      position:Position.TopRight
    })

  }
  d()
  {
    this.alertify.dismiss();
  }

}


