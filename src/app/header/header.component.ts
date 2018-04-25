import { Component, OnInit,Input  } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Harga:string;
  constructor(private data: DataService) { }
  public isCollapsed: boolean = false;
  public isCollapsable: boolean = false;
  ngOnInit() {
    this.data.currentSimulasi.subscribe(obj => this.Harga = obj == null ? "" : obj.simulasiHarga.toString());
  }

  toggleMenu()
  {
    this.isCollapsed = !this.isCollapsed;
  }
}
