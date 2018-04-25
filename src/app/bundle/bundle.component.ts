import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LandingComponent } from '../landing/landing.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Objectgroup} from '../models/objectgroup';
import {Objectbrand} from '../models/objectbrand';
import {Objectmodel} from '../models/objectmodel';
import {ObjectgroupService} from '../services/objectgroup.service';
import {ObjectbrandService} from '../services/objectbrand.service';
import {ObjectmodelService} from '../services/objectmodel.service';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})


export class BundleComponent implements OnInit {
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  produkCtrl: FormControl;

  //master
  Objectgroups: Objectgroup[];
  Objectbrands: Objectbrand[];
  Objectmodels: Objectmodel[];

  //model
  modObjectGroup:string;
  modObjectBrand:string;
  modObjecModel:string;
  valueHarga:number;

  //loader
  dataProvince:boolean;
  dataBrand:boolean;
  dataModel:boolean;

  constructor(private _formBuilder: FormBuilder,
    public objectGroupService:ObjectgroupService,
    public objectBrandService:ObjectbrandService,
    public objectModelService:ObjectmodelService) {
      this.produkCtrl = new FormControl();
  }
  
  ngOnInit() {
    this.valueHarga = 0;
    this.dataBrand = false;
    this.dataModel = false;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    // this.objectGroupService.getObjectgroup()
    // .subscribe(
    //   data => {
    //     this.Objectgroups = data;
    //     console.log(this.Objectgroups);
    //   },
    //   error => {   });
  }

  ngOnSelectGroup(objectGroup:string){
    this.Objectbrands = null;
    this.Objectmodels = null;
    this.dataBrand = true;
    this.objectBrandService.getObjectbrand(objectGroup)
    .subscribe(
      data => {
        this.Objectbrands = data;
        this.dataBrand = false;
        console.log(this.Objectbrands);
      },
      error => {   });
  }

  ngOnSelectBrand(objectBrand:string){
    this.Objectmodels = null;
    this.dataModel = true;
    this.objectModelService.getObjectmodel(objectBrand)
    .subscribe(
      data => {
        this.Objectmodels = data;
        this.dataModel = false;
        console.log(this.Objectmodels);
      },
      error => {   });
  }
 
  
}
