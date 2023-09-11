import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-instructions-user',
  templateUrl: './instructions-user.component.html',
  styleUrls: ['./instructions-user.component.css']
})
export class InstructionsUserComponent implements OnInit{

  examenId:any;
  examen:any;

  firstVideo: any;
  youtubeLink: any;
  prueba:any;

  constructor(private examenService:ExamenService, private route:ActivatedRoute, private router:Router,private cdRef: ChangeDetectorRef,
    private sanitizer: DomSanitizer){
    //this.firstVideo = 'hambreCero.mp4';
  }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examId'];
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (data:any)=>{
        console.log(data);
        this.examen = data;
        this.firstVideo = 'assets/'+data.firstVideo;
        //console.log(this.videoYotube);
        //console.log("este es el quemado "+ this.firstVideo);
        console.log("Valor recuperado de la base de datos:", this.firstVideo);
        //this.cdRef.detectChanges();
        
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  empezarLaHistoria(){
    Swal.fire({
      title:'Estas preparado ?',
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText:'Empezar',
      icon:'question'
    }).then((result:any)=>{
      if(result.isConfirmed){
        this.router.navigate(['/start-history/'+this.examenId])
      }
    })
  }

}
