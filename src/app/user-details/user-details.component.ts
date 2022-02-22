import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() usuario?: Usuario;

  constructor() { }


  ngOnInit(): void {
  }

}
