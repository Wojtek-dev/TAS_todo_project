export class Todo {
    id: number;
    title: string = '';
    complete: boolean = false;
  
    constructor(id:number,title:string,complete:boolean) {
      this.id = id;
      this.title = title;
      this.complete = complete;
    }
  }
  