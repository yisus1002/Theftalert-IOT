import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user-response';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user:any = {};
  constructor(private _sUser: UsersService,

    public _sctr: ControllerService,
    ){
    }
    ngOnInit(): void {
    this._sctr.createForm();
    // this._sctr.leerToken();
    this._sctr.getUserId()

  }

  eliminarcuenta(){
    // console.log(this._sctr.user);

    this._sctr.eliminar(this._sctr.user);
  }
  getUsersid(id:any){
    this._sUser.getUserId(id)
    .subscribe({
      next: (data) => {

        console.log(data);
      }
    })
  }
}
