class Student {
    constructor(name, age, grades) {
        this.name = name
        this.age = age
        this.grades = grades
    }

    addGrade(newGrade) {
        this.grades = [...this.grades, newGrade]
    }
    getAverage() {
        const total = this.grades.reduce((sum, grade) => sum + grade);
        return total / this.grades.length;
      }
}

let grades = [1, 3]
const uczen = new Student('Ismail Ahmad Kanabawi', 16, grades)
console.log(uczen.getAverage())
uczen.addGrade(5)
console.log(uczen.getAverage())