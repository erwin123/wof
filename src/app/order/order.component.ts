import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { AngsuranOpsi } from '../models/angsuran-opsi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  modelAngsuran:AngsuranOpsi;
  dataBrand:any;
  Objectbrands:any;
  modObjectBrand:any;
  Objectmodels:any;
  dataModel:any;
  constructor(private data:DataService,public router: Router) { }

  ngOnInit() {
    this.data.currentAngsuran.subscribe(obj => obj == null? this.router.navigate(['bundle']): this.modelAngsuran = obj);
  }
  ngOnSelectBrand(Objectbrands:any)
  {

  }
}
