import { Pipe, PipeTransform } from '@angular/core';
import { Kota } from './models/kota';
@Pipe({
  name: 'provinceCode'
})
export class ProvinceCodePipe implements PipeTransform {

  transform(allKota: Kota[], province_code?:string) :Kota[] {
    return allKota.filter(kota => kota.province_code == province_code);
  }

}
