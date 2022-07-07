import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() imgURLs: string[] =  [
    "/assets/xochil/1.jpg",
    "/assets/xochil/2.jpg"
  ];
  @Input() OpinionExperiencia: string = "";
  @Input() Nombre: string = "";
  @Input() InstitucionComunidad: string = "";
  @Input() Nombre_sonda: string = "";
  @Input() IMG_user: string = "";

  imgURL: string | any;
  counter_imgs:number = 2;
  counter:number = 1;

  constructor() { }

  ngOnInit(): void {
    this.counter_imgs = this.imgURLs.length;
    this.imgURL = this.imgURLs[0];
  }

  changeImgs(operacion: string){

    switch (operacion) {
      case "+":
        if (this.counter >= this.counter_imgs)
        {
          this.counter = 1;
        }else{
          this.counter++
        }
        break;
      case "-":
        if (this.counter - 1 <= 0)
        {
          this.counter = this.counter_imgs;
        }else{
          this.counter--
        }
        break;
      default:
        break;
    }
    this.changeImg(this.counter);
  }

  changeImg(posicion:number){
    this.imgURL = this.imgURLs[posicion - 1];
  }


}
