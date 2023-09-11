import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-history',
  templateUrl: './start-history.component.html',
  styleUrls: ['./start-history.component.css']
})
export class StartHistoryComponent implements OnInit {

  examId:any;
  preguntas:any;
  puntosConseguidos = 0;
  respuestasCorrectas = 0;
  intentos = 0;

  esEnviado = false;
  timer:any;

  constructor(private locationSt:LocationStrategy,private route:ActivatedRoute, private preguntasService:PreguntaService){}


  ngOnInit(): void {
    this.prevenirRetroceso();
    this.examId = this.route.snapshot.params['examId'];
    console.log(this.examId);
    this.cargarPreguntas();
  }

  cargarPreguntas(){
    this.preguntasService.listarPreguntasDelExamenParaLaPrueba(this.examId).subscribe(
      (data:any)=>{
        console.log(data);
        this.preguntas=data;

        this.preguntas.forEach((p:any)=>{
          p['answer'] = '';
        })
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  prevenirRetroceso(){
    history.pushState(null,null!,location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null,null!,location.href);
    })
  }


  enviarCuestionario(){
    Swal.fire({
      title: '¿Quieres enviar el examen?',
      showCancelButton: true,
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Enviar',
      icon:'info'
    }).then((e) => {
      if(e.isConfirmed){
        this.evaluaarExamen();
      }
    })
  }

  iniciarTemporizador(){
    let t = window.setInterval(() => {
      if(this.timer <= 0){
        this.evaluaarExamen();
        clearInterval(t);
      }else{
        this.timer --;
      }
    },1000)
  }

  obtenerHoraFormateada(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer - mm*60;
    return `${mm} : min : ${ss} seg`;
  }

  evaluaarExamen(){
    this.preguntasService.evaluarExamen(this.examId,this.preguntas).subscribe(
      (data:any) => {
        console.log("esta es la data de evaluar: ",data);
        this.puntosConseguidos = data.puntosMaximos;
        this.respuestasCorrectas = data.respuestasCorrectas;
        this.intentos = data.intentos;
        this.esEnviado = true;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  
}
