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
  examen:any = new Object();

  firstVideo: any;
  //firebaseLink: string = 'https://firebasestorage.googleapis.com/v0/b/proyectodegradog-h.appspot.com/o/hambreCero.mp4?alt=media&token=7bdee123-3c85-453f-9f80-6787967ad7aa';
  
  youtubeLink: string=''; // Tu enlace de YouTube desde la base de datos
  //youtubeUrl: SafeResourceUrl = '';
  youtubeVideoId: string =''; 
  youtubeUrl: SafeResourceUrl = '';
  constructor(private examenService:ExamenService, private route:ActivatedRoute, private router:Router,private cdRef: ChangeDetectorRef,
    private sanitizer: DomSanitizer){
   
  }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examId'];
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (data:any)=>{
        console.log(data);
        this.examen = data;
        this.youtubeLink = data.firstVideo; // Reemplaza 'youtubeLink' con el campo real de tu base de datos
        this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeLink);
        //this.firebaseLink = data.firebaseLink;
        //this.firstVideo = 'assets/'+data.firstVideo;
        console.log("Valor recuperado de la base de datos:", this.youtubeUrl);
        
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
