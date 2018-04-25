import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../models/product-type';
import { Province } from '../models/province';
import { Kota } from '../models/kota';
import { ProvinceCodePipe } from '../province-code.pipe';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { DataService } from "../services/data.service";
import { Simulasi } from '../models/simulasi';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public Objectproducttypes = ProcuctTypes;
  public Objectprovinces = Provinces;
  public Objectkotas = Kotas;

  modelSimulasi:Simulasi;
  constructor(public router: Router,private data: DataService,public snackBar: MatSnackBar) { }

  ngOnInit() {
    //init model
    this.modelSimulasi = {
      "simulasiHarga":1000000,
      "simulasiKota":null,
      "simulasiProvince":this.Objectprovinces[0],
      "simulasiProduk":this.Objectproducttypes[0]
    }
  }

  ngOnClickProduct(obj:ProductType){
    this.Objectproducttypes.forEach(element => {
      element.selected = false;
      if(element.title == obj.title)
      {
        element.selected = true;
        this.modelSimulasi.simulasiProduk = obj;
      }
    });
  }

  ngOnSelectProvince(obj:Province){
    
  }

  ngOnSelectKota(obj:Kota){
    
  }

  ngOnClickSubmit(){
    //validation
    if(this.modelSimulasi.simulasiHarga < 1000000)
    {
      this.snackBar.open("Harga minimal 1 juta", "", {
        duration: 3000,extraClasses: ['success-snackbar']
      });
      return false;
    }
    if(this.modelSimulasi.simulasiKota == null)
    {
      this.snackBar.open("Kota belum dipilih", "", {
        duration: 3000,
      });
      return false;
    }
    
    this.data.setSimulasi(this.modelSimulasi);
    this.router.navigate(['bundle/simulate']);
  }
}

var ProcuctTypes: ProductType[] = [
  { "title": "Mobil Baru", "icon": "fa fa-car", "selected":true },
  { "title": "Mobil Bekas", "icon": "fa fa-car", "selected": null },
  { "title": "Motor Baru", "icon": "fa fa-motorcycle", "selected": null },
  { "title": "Motor Bekas", "icon": "fa fa-motorcycle", "selected": null },
  { "title": "Multi Guna", "icon": "fa fa-suitcase", "selected": null },
]

var Provinces: Province[] = [
  { "province_code": "010", "province_desc": "Jabodetabek"},
  { "province_code": "011", "province_desc": "Jawa Barat" },
  { "province_code": "012", "province_desc": "Jawa Tengah" },
]

var Kotas: Kota[] = [
  { "province_code": "010", "kota_desc": "Tangerang Kota", "kota_code":"00001"},
  { "province_code": "010", "kota_desc": "Tangerang Selatan", "kota_code":"00002"},
  { "province_code": "010", "kota_desc": "Serpong", "kota_code":"00003"},
  { "province_code": "011", "kota_desc": "Bandung Kota", "kota_code":"00004"},
  { "province_code": "011", "kota_desc": "Ciamis", "kota_code":"00005" },
  { "province_code": "011", "kota_desc": "Cianjur", "kota_code":"00006" },
  { "province_code": "012", "kota_desc": "Bawen", "kota_code":"00007"},
  { "province_code": "012", "kota_desc": "Ambarawa", "kota_code":"00008" },
  { "province_code": "012", "kota_desc": "Pati", "kota_code":"00009" },
]