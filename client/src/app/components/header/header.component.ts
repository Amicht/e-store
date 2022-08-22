import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isClient: boolean = false;

  constructor(private authService:AuthService,
    private _router:Router) { }

  ngOnInit(): void {
    this.authService.client$.subscribe(res => {
      if(res){
        this.isClient = true;
      }
      else{
        this.isClient = false;
      }
    })
  }

  logOut(){
    this.authService.clearStorage();
    this._router.navigate(['/']);
  }

}
