/**
 * Прості типи в TypeScript описують значення без внутрішньої структури.
 * Достатньо поставити двокрапку після імені змінної, щоб явно вказати тип.
 */

const explicitNumber: number = 42;
const explicitString: string = "TypeScript makes types explicit";
const explicitBoolean: boolean = true;
const explicitNull: null = null;
const explicitUndefined: undefined = undefined;

/**
 * Тип можна не вказувати — компілятор сам зробить висновок (інференцію).
 * Тут `inferredNumber` автоматично матиме тип `number`.
 */
const inferredNumber = explicitNumber * 10;
const inferredString = `Answer: ${explicitNumber}`;

/**
 * Тип `any` вимикає перевірку типів і дозволяє змінювати значення на будь-яке.
 * Користуйтеся ним лише там, де справді немає альтернатив.
 */
let flexibleValue: any = "Starts as a string";
flexibleValue = 108;
flexibleValue = { message: "Тепер це об'єкт" };

/**
 * `null` та `undefined` часто позначають відсутність значення.
 * Для зручності можна використовувати об'єднання: тип число або `null`.
 */
let optionalCount: number | null = null;
optionalCount = 5;
