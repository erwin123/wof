import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Simulasi } from '../models/simulasi';
import { AngsuranOpsi } from '../models/angsuran-opsi';

@Injectable()
export class DataService {
  
  private simulasiSource = new BehaviorSubject<Simulasi>(null);
  currentSimulasi = this.simulasiSource.asObservable();

  private angsuranSource = new BehaviorSubject<AngsuranOpsi>(null);
  currentAngsuran = this.angsuranSource.asObservable();

  constructor() { }

  setSimulasi(simulasi: Simulasi){
    this.simulasiSource.next(simulasi);
  }

  setAngsuran(angsuran: AngsuranOpsi){
    this.angsuranSource.next(angsuran);
  }
}

