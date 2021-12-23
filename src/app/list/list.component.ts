import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  inputField='';
  dis=true;
  list=[""];
  anylist=false;
  constructor() { 
    
  }
  
  ngOnInit(): void {
    
  }
  id=1;
  onKey(event:any){
    if(this.inputField !== '')
    {
      this.dis=false;
      //console.log(this.inputField)
    }
  }

  submit(){
    this.anylist=true;
    this.list.push(this.inputField);
    this.id++;
    this.dis=true;
    //console.log(this.list);
  }

  remove(rem:any,id:any)
  {
    console.log(id);
    this.list.splice(id, 1);
    this.id--;
  }

}
