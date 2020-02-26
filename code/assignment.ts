interface Person{
    Name : string;
    Age : number;
}
class student implements Person
{
    Name : string;
    Age : number;
    Class : string;
    fvrt_sub : string;
    constructor(name: string, age:number,cls:string,sub:string)
    {
        this.Name = name;
        this.Age = age;
        this.Class = cls;
        this.fvrt_sub =sub;
    }
}
class School
{
   sarray:Array<student> = [];
   school_name: string;
   constructor(sname : string, stud_obj: student[])
   {
       this.sarray = stud_obj;
       this.school_name = sname;
   }
   
}
function add()
{
    var name = (<HTMLInputElement>document.getElementById('Name')).value; 
    var age =parseInt((<HTMLInputElement>document.getElementById('age')).value);
    var cls = (<HTMLInputElement>document.getElementById('class')).value; 
    var fav_sub = (<HTMLInputElement>document.getElementById('Subject')).value; 
    var schl_name =(<HTMLInputElement>document.getElementById('School')).value;  
    let s1  = new student(name,age,cls,fav_sub);
    let array : student[];
    array.push(s1);
    let student_obj : School = new School (schl_name,array);
}
    function show()
    {
        var schoolname = (<HTMLInputElement>document.getElementById('search')).value;

     }
