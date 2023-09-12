import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-history-exam',
  templateUrl: './history-exam.component.html',
  styleUrls: ['./history-exam.component.css']
})
export class HistoryExamComponent implements OnInit{

  catId:any;
  examenes:any;

  constructor(private route:ActivatedRoute,private examenService:ExamenService){}

  ngOnInit():void{
    this.route.params.subscribe((params)=>{
      this.catId=params['catId'];
      if(this.catId==1){
        console.log("cargando la historia");
        this.examenService.listarCuestionarios().subscribe(
          (data)=>{
            this.examenes =data;
            //this.examenes = data.sort((a: any, b: any) => a.title.localeCompare(b.title));
            console.log(this.examenes); 
          },
          (error)=>{
            console.log(error);
          }
        )
      }else{
        console.log("otra historia");
        this.examenService.listarExamenesDeUnaCategoria(this.catId).subscribe(
          (data:any)=>{
            this.examenes=data;
            console.log(this.examenes);
          },
          (error)=>{
            console.log(error);
          }
        )
      }

    })
 
  }
}
