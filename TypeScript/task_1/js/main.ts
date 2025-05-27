interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

const teacher3: Teacher = {
	firstName: "Henri",
	lastName: "Mille",
	fullTimeEmployee: false,
	location: "Evron",
	contract: false,
}


interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'Louiza',
	lastName: 'Houaouti',
	location: 'Laval',
	fullTimeEmployee: true,
	numberOfReports: 12,
};

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Noam", "Travert");
console.log(teacher3);
console.log(director1);
console.log(printTeacher("Henri", "Mille"));
console.log(student.displayName());
console.log(student.workOnHomework()); 
