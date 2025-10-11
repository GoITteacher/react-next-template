/**
 * Масиви можна типізувати двома синтаксисами: `number[]` чи `Array<number>`.
 * Обидва варіанти еквівалентні — вибирайте той, що краще читається у вашій команді.
 */
const numbers: number[] = [3, 5, 8, 13];
const tags: Array<string> = ["frontend", "typescript", "education"];

/**
 * TypeScript підказує типи методів масиву. Наприклад, `map` знає,
 * що опрацьовує числа, а отже параметр `value` має тип `number`.
 */
const doubled = numbers.map((value) => value * 2);
const firstLongTag = tags.find((tag) => tag.length > 6);

/**
 * Для масиву об'єктів найзручніше описати структуру окремим типом або інтерфейсом.
 */
interface Course {
  title: string;
  lessons: number;
  isPublished: boolean;
}

const courses: Course[] = [
  { title: "TypeScript Basics", lessons: 12, isPublished: true },
  { title: "Advanced React Patterns", lessons: 18, isPublished: false },
];

/**
 * Функції, що працюють з масивами, одразу отримують коректні підказки.
 */
function publishCourse(courseList: Course[], courseTitle: string): Course[] {
  return courseList.map((course) =>
    course.title === courseTitle ? { ...course, isPublished: true } : course
  );
}

const updatedCourses = publishCourse(courses, "Advanced React Patterns");
