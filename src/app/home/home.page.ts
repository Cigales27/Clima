import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  clima: any;
  Cp: string;
  Ciudad: string;
  gradoCent: string = '0';
  gradoFarenhit: string = '0';

  constructor(private apiService:ApiService) {}
  //Crea el ngoninit
  ngOnInit() {
  }

  //Crea el metodo getClima
  getClima() {
    this.apiService.getClima(this.Ciudad, this.Cp).subscribe( data => {
      console.log(data);
      this.clima = data;
      this.gradoCent = this.clima.temp_c;
      this.gradoFarenhit = this.clima.temp_f;
    });
  }

}
