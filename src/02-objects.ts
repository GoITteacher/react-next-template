/**
 * Об'єкти описують структуру даних, де кожне поле має власний тип.
 * Можна використовувати як анонімні типи, так і `interface` чи `type`.
 */
const book: { title: string; pages: number; isPublished: boolean } = {
  title: "Learning TypeScript",
  pages: 320,
  isPublished: true,
};

/**
 * `interface` дозволяє повторно використовувати опис структури.
 * Додаємо `readonly id`, щоб заборонити змінювати значення після створення,
 * та `email?`, роблячи поле опціональним.
 */
interface UserProfile {
  readonly id: number;
  name: string;
  email?: string;
  address?: {
    city: string;
    street: string;
  };
}

const admin: UserProfile = {
  id: 1,
  name: "Iryna",
  email: "iryna@example.com",
  address: {
    city: "Lviv",
    street: "Shevchenka 10",
  },
};

/**
 * Оскільки `id` позначено як `readonly`, змінювати його не можна.
 * Наступний рядок спричинив би помилку компіляції:
 *
 * admin.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
 *
 * Для опціональних полів потрібно перевіряти їх наявність перед використанням.
 */
function printUserEmail(user: UserProfile): void {
  if (user.email) {
    console.log(`Пошта користувача: ${user.email}`);
  } else {
    console.log("Користувач не вказав електронну пошту");
  }
}

printUserEmail(admin);
printUserEmail({ id: 2, name: "Oleh" });
