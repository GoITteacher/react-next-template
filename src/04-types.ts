/**
 * Union (об'єднання) дозволяє вказати кілька можливих варіантів типу.
 * Зручно там, де змінна може набувати різних форм залежно від контексту.
 */
// type Identifier = number | string;

// type UserAge = number | string;

// const userAge: UserAge = 25;

// const numericId: Identifier = 42;
// const stringId: Identifier = "user-42";

/**
 * Літеральні типи корисні для значень, що можуть бути лише з певного набору.
 * Часто використовуються для статусів, ролей, фільтрів тощо.
 */
// type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";

// const status: OrderStatus = '';

// document.querySelector()?.insertAdjacentHTML('')


// interface Order {
//   id: Identifier;
//   status: OrderStatus;
// }

// const order: Order = { id: "A-1024", status: "pending" };

/**
 * При роботі з union типами складається дрібна логіка перевірок (type guards).
 * Це дозволяє безпечно звузити тип до конкретного варіанта.
 */
function isTrackingAvailable(status: OrderStatus): boolean {
  if (status === "pending" || status === "canceled") {
    return false;
  }

  // На цьому етапі статус точно `"shipped"` або `"delivered"`.
  return true;
}

function formatIdentifier(id: Identifier): string {
  return typeof id === "number" ? `#${id.toString().padStart(6, "0")}` : id;
}

console.log(`Замовлення ${formatIdentifier(order.id)}:`, isTrackingAvailable(order.status));
