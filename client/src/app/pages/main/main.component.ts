import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  template: '<app-store *ngIf="role === 1"></app-store><app-admin *ngIf="role === 2"></app-admin>',
  styleUrls: []
})
export class MainComponent implements OnInit {

  role: number = 0;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.client$.subscribe(c => {
      if(c){
        this.role = c.role
      }
    })
    this.authService.getClientDetails()
  }

}
