import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService:CustomToastrService){

    toastrService.message("Merhaba","Burak",{
      messageType:ToastrMessageType.Error,
      position:ToastrPosition.TopCenter
    })

    toastrService.message("Merhaba","Mithat",{
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.TopCenter
    })

    toastrService.message("Merhaba","Mehmetcan",{
      messageType:ToastrMessageType.Success,
      position:ToastrPosition.BottomLeft
    })

    toastrService.message("Merhaba","Samet",{
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.BottomCenter
    })
  

  }
}


