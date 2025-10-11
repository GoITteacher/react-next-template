/**
 * Функції описують як вхідні параметри, так і тип результату.
 * Це дозволяє компілятору перевірити правильність викликів і повернень.
 */
function add(a: number, b: number): number {
  return a + b;
}

/**
 * Тип `void` означає, що функція нічого не повертає.
 * Для функцій-обробників подій або логів достатньо накласти тип на аргументи.
 */
const logMessage = (message: string): void => {
  console.log(`[LOG]: ${message}`);
};

/**
 * Опціональні параметри позначаються знаком питання. Під час виклику їх можна пропустити.
 * Всередині функції корисно викликати перевірки на `undefined`.
 */
function greet(name: string, title?: string): string {
  if (title) {
    return `Вітаю, ${title} ${name}!`;
  }

  return `Привіт, ${name}!`;
}

/**
 * Значення за замовчуванням використовують, коли аргумент не передано.
 * Тут `isActive` матиме значення `true`, якщо викликати функцію з одним параметром.
 */
type UserRole = "admin" | "editor" | "viewer";

function createUser(name: string, role: UserRole, isActive: boolean = true) {
  return {
    name,
    role,
    isActive,
  };
}

logMessage(`2 + 2 = ${add(2, 2)}`);
console.log(greet("Olena"));
console.log(greet("Taras", "пан"));
console.log(createUser("Iryna", "admin"));
