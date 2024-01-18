import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {Equipo} from '../model/equipo';
import {catchError, concatMap, last, map, take, tap} from 'rxjs/operators';
import {from, Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import { EquiposService } from '../services/service.equipo';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import QRCode from 'qrcode';
@Component({
  selector: 'create-equipo',
  templateUrl: 'create-equipo.component.html',
  styleUrls: ['create-equipo.component.css']
})
export class CreateEquipoComponent implements OnInit {
  equipoId:string;
  partes: string[] = [];
  qrCodeData: string;
  form = this.fb.group({
    descripcion:['', Validators.required],
    tipoDispositivo:[null],
    sO:['',Validators.required],
    estado:['',Validators.required],
    tipoConRed:['',Validators.required],
    modelo:['',Validators.required],
    categoria:['',Validators.required],
    serie:['',Validators.required],
    sala:['',Validators.required],
    Maus: [false],
    Teclado:[false],
    Diadema:[false],
    Parlantes:[false],
    CPU:[false],
    Monitor:[false],
    Cargador:[false]
  });
  constructor(private fb:FormBuilder,
    private equipoService:EquiposService,
    private afs: AngularFirestore,
    private router: Router,
    private storage: AngularFireStorage,
    private location:Location) {
  }

  ngOnInit() {
    this.equipoId = this.afs.createId();
}

  onCreateEquipo(){
    const val = this.form.value;
    const selectedPartes = [];

    if (val.Maus) {
      selectedPartes.push('Maus');
    }
  
    if (val.Teclado) {
      selectedPartes.push('Teclado');
    }
  
    if (val.Diadema) {
      selectedPartes.push('Diadema');
    }
  
    if (val.Parlantes) {
      selectedPartes.push('Parlantes');
    }
  
    if (val.CPU) {
      selectedPartes.push('CPU');
    }
  
    if (val.Monitor) {
      selectedPartes.push('Monitor');
    }
  
    if (val.Cargador) {
      selectedPartes.push('Cargador');
    }
    const equipoData = `
    Descripción: ${val.descripcion}
    Estado: ${val.estado}
    Modelo: ${val.modelo}
    SO: ${val.sO}
    Tipo de Dispositivo: ${val.tipoDispositivo}
    Tipo de Conexión a Red: ${val.tipoConRed}
    Categoría: ${val.categoria}
    Serie: ${val.serie}
    Sala: ${val.sala}
    Partes: ${selectedPartes.join(', ')}`
    ;
    QRCode.toDataURL(equipoData, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
       const newEquipo: Partial<Equipo> = {
            descripcion: val.descripcion,
            estado: val.estado,
            modelo:val.modelo,
            sO:val.sO,
            tipoDispositivo: val.tipoDispositivo,
            tipoConRed: val.tipoConRed,
            categoria: [val.categoria],
            serie:val.serie,
            sala:val.sala,
            partes: selectedPartes,
            url: url,
        };
        this.equipoService.createEquipo(newEquipo, this.equipoId)
            .pipe(
                tap(equipo => {
                    console.log("Registro exitoso: ", equipo);
                    this.router.navigateByUrl("/equipos");
                    Swal.fire('Equipo Registrado correctamente', `Serie: ${equipo.serie}`, 'success');
                }),
                catchError(err => {
                    console.log(err);
                    alert("no se realizo registro.");
                    return throwError(err);
                })
            )
            .subscribe();
    });
  }
  volverPaginaAnterior() {
    this.location.back(); // Navega hacia atrás en el historial del navegador
}
resetCheckboxes() {
  // Restablece los valores de los checkboxes cuando cambia la selección
  this.form.patchValue({
    Maus: false,
    Teclado: false,
    Diadema:false,
    Parlantes:false,
    CPU:false,
    Monitor:false,
    Cargador:false
    // Restablece otros controles de checkbox aquí
  });
}
}
