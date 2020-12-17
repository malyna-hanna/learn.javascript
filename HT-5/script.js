const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

function findStudent(studentId){
    function findId(element) {
        if (element.id == studentId) {
            return true
        }
    }
    const student = students.find(findId);
    return student;
}
const result = getId('Enter Id');

function getId(message){
    let number;
    do{
        number = prompt(message);
    } while (!(number > 9 && number < 14));
    return number
}

console.log('student', findStudent(result));
 
const countOfMarks = findStudent(result).marks.length;
const marks = findStudent(result).marks;


function getSum(acc, el) {
    return acc + el;
}

const sumMarks = marks.reduce(getSum);
const avgMark = sumMarks/countOfMarks;

console.log('sumMarks:', sumMarks, 'countOfMarks: ', countOfMarks, 'avgMark: ', avgMark );

const allMarks = students.reduce(joinAllMarks, [])

function joinAllMarks(acc, el){
    return acc.concat(el.marks)
}

const allMarksValue = allMarks.reduce(getSum);


console.log(
    'allMarks: ', allMarks , 
    'allMarksValue: ', allMarksValue , 
    'allMarks length', allMarks.length,
    'AVG', allMarksValue/allMarks.length,
)

