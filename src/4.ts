// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.
class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}
// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.
class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

abstract class House {
  protected door: boolean;
  protected tenants: Person[];

  constructor(protected key: Key) {}

  public comeIn(tenant: Person) {
    if (!this.door) console.log("Door is closed");

    this.tenants.push(tenant);
    console.log("Welcome home");
  }

  public abstract openDoor(key: Key): void;
}

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

class MyHouse extends House {
  public openDoor(key: Key): boolean {
    if (key.getSignature() !== this.key.getSignature()) {
      console.log("Invalid key");
    }

    console.log("Welcome home");
    return (this.door = true);
  }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
