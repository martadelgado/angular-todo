export class Todo {

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public dueDate: string,
    public isChecked: boolean,
    public borderColor: string,
  ) {  }

}
