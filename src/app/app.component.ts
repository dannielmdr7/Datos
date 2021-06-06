import { Component } from '@angular/core';
import { getISOWeek } from 'date-fns';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calendar';
  public datosSubs = [''];
  public datoOt = 'Seleccione un tipo';
  public prioridad = 'Prioridad';
  public tipoCuenta = 'Tipo de Cuenta';
  public tipoSubs = 'Selecciona un tipo ';
  public cuentaTarea = 'Tipo de cuenta';
  public selectedDate = Date;
  datePlanif: Date = new Date();
  dateObject: Date = new Date();
  isEnglish = false;
  public estadoFecha = this.datePlanif.getDate() - this.dateObject.getDate();
  public fechaPaso = '';

  constructor(private i18n: NzI18nService) {}

  onChangePlanif(result: Date) {
    this.datePlanif = result;
    this.estadoFecha = this.datePlanif.getDate() - this.dateObject.getDate();
    if (this.estadoFecha < 0) {
      this.fechaPaso = 'Inactivo, la fecha pasó';
    } else {
      this.fechaPaso = 'Activo, aún hay dias para terminar';
    }
  }
  onChangeObject(result: Date) {
    this.dateObject = result;
    this.estadoFecha = this.datePlanif.getDate() - this.dateObject.getDate();
    if (this.estadoFecha < 0) {
      this.fechaPaso = 'Inactivo, la fecha pasó';
    } else {
      this.fechaPaso = 'Activo, aún hay dias para terminar';
    }
  }

  clickOt(tipo: string) {
    this.datoOt = tipo;
  }
  clickPrioridad(prioridad: string) {
    this.prioridad = prioridad;
  }
  clickTipoCuentaInterna(tipo: string) {
    this.tipoCuenta = tipo;
    this.datosSubs = [
      'Red de alimentación',
      'Red de distribución',
      ' Red de dispersión',
      'Red de usuario',
    ];
  }
  clickTipoCuentaExterna(tipo: string) {
    this.tipoCuenta = tipo;
    this.datosSubs = [
      'Red primaria',
      'Red secundaria',
      'Red disperción',
      'Red troncal',
      'Red de distribución',
    ];
  }
  clickTipoSubscrito(tipo: string) {
    this.tipoSubs = tipo;
  }
  clickCuentaTarea(cuenta: string) {
    this.cuentaTarea = cuenta;
  }
}
