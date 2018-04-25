import { Component, OnInit } from '@angular/core';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { Router } from '@angular/router';
import { DataService } from "../services/data.service";
import { AngsuranOpsi } from '../models/angsuran-opsi';
import { Simulasi } from '../models/simulasi';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {
  public opsi = opsi;
  objSimulasi:Simulasi;
  constructor(public router: Router,private data:DataService) { }

  ngOnInit() {
    this.data.currentSimulasi.subscribe(obj => obj == null? this.router.navigate(['bundle']) : this.objSimulasi = obj);
    this.opsi.forEach(element => {
      element.Harga = this.objSimulasi.simulasiHarga;
    });
  }
  onSelectOpsi(obj:AngsuranOpsi)
  {
    this.data.setAngsuran(obj);
    this.router.navigate(['bundle/order']);
  }
}

var opsi:AngsuranOpsi[] = [
{"AreaCode":"010", "Opsi":"Opsi 1", "Downpayment":500000000, "Angsuran":7500000, "Tenor":5, "Harga":0},
{"AreaCode":"010", "Opsi":"Opsi 2", "Downpayment":400000000, "Angsuran":9500000, "Tenor":4, "Harga":0},
{"AreaCode":"010", "Opsi":"Opsi 3", "Downpayment":300000000, "Angsuran":9500000, "Tenor":5, "Harga":0},
{"AreaCode":"010", "Opsi":"Opsi 4", "Downpayment":500000000, "Angsuran":10500000, "Tenor":4, "Harga":0},
{"AreaCode":"010", "Opsi":"Opsi 5", "Downpayment":400000000, "Angsuran":6500000, "Tenor":5, "Harga":0},
{"AreaCode":"010", "Opsi":"Opsi 6", "Downpayment":300000000, "Angsuran":11500000, "Tenor":4, "Harga":0},
{"AreaCode":"010", "Opsi":"Opsi 7", "Downpayment":500000000, "Angsuran":10500000, "Tenor":4, "Harga":0},
{"AreaCode":"010", "Opsi":"Opsi 8", "Downpayment":400000000, "Angsuran":6500000, "Tenor":5, "Harga":0},
{"AreaCode":"010", "Opsi":"Opsi 9", "Downpayment":300000000, "Angsuran":11500000, "Tenor":4, "Harga":0},
]