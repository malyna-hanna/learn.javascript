function joinAllMarks(acc, el){
  return acc.concat(el.marks)
};
function getSum(acc, el) { 
  return acc + el;
}

class Group{
  students = [];

  addStudent(student){
    this.students.push(student)  
  }
  getAverageMark(){
    const allMarks = this.students.reduce(joinAllMarks, []);
    const allMarksValue = allMarks.reduce(getSum);
      return allMarksValue/allMarks.length
  }
}

const feGroup = new Group();

class Student{
  constructor(name, marks) {
      this.name = name;
      this.marks = marks
    }
}
const firstStudent = new Student('John Doe', [10, 102, 0]);
const secondStudent = new Student('Alex Smith', [10, 9, 8]);
const thirdStudent = new Student('Bob Johnson', [9, 10, 10, 8]);

feGroup.addStudent(firstStudent);
feGroup.addStudent(secondStudent);
feGroup.addStudent(thirdStudent);
console.log(feGroup);
console.log(feGroup.getAverageMark());

