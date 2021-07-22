import { stringify } from '@angular/compiler/src/util';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {

  estado1:string="active";
  estado2:string="";
  estado3:string="";
  estado4:string="";
  estado5:string="";
  estados:string[]=[this.estado1,this.estado2,this.estado3,this.estado4,this.estado5];

  public secciones: Array<string> = ["promociones",'pizzas', 'extras', 'bebidas'];

  
  activarBoton(estado:string):void{
    for(var i=0;i<this.estados.length;i++){
      this.estados[i]="";
    } 
    estado="active";
  }

  activarBoton1():void{
    this.estado1="active"
    this.estado2=""
    this.estado3=""
    this.estado4=""
    this.estado5=""
  }
  activarBoton2():void{
    this.estado2="active"
    this.estado1=""
    this.estado3=""
    this.estado4=""
    this.estado5=""
  }
  activarBoton3():void{
    
    this.estado3="active"
    this.estado2=""
    this.estado1=""
    this.estado4=""
    this.estado5=""   
  }
  activarBoton4():void{
    this.estado4="active"
    this.estado2=""
    this.estado1=""
    this.estado5=""
    this.estado3="" 
  }
  activarBoton5():void{
    this.estado5="active"
    this.estado2=""
    this.estado1=""
    this.estado4=""
    this.estado3=""   
  }

  headerActual:string="header";
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop>0|| document.documentElement.scrollTop >0){
      this.headerActual="header2"
    }else{
      this.headerActual="header"
    }
  }
}
