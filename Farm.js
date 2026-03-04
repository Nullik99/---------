class Animal {
    //ghjdthrfsdsadasdasdasd
    //Приватное поле
    #name;
    #age;
    #weight;
    // Конструктор котоый вызываетя каждый раз когда создаетя новый объект. Он нужен для динамического создания обекта.Без него нельзя передать параметры
    constructor(name, age, weight) {
        //по сути тут вызывается сеттер и присваивается name..., чтобы провести валидацию
        this.namer = name;
        this.ager = age;
        this.weighter = weight;
    }
    //Методы класса. Пердается только значения контсруктора. По другому никак
    speak() {
        console.log('Animak speak');
    }
    set ager(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        } else {
            console.log('Возраст должен быть больше 0');
        }
    }
    get ager() {
        return this.#age;
    }
    set weighter(newweight) {
        if (newweight > 0) {
            this.#weight = newweight;
        } else {
            console.log('Вec должен быть больше 0');
        }
    }
    get weighter() {
        return this.#weight;
    }
    set namer(newname) {
        if (newname) {
            this.#name = newname;
        } else {
            console.log('имя не может быть пустым');
        }
    }
    get namer() {
        return this.#name;
    }
}
///////////////
class Cow extends Animal {
    speak() {
        console.log('MUUUUUUUUUUUUUUU');
    }
}

class Chicken extends Animal {
    speak() {
        console.log('Ko ko ko ko');
    }
}
///////
//const d = new Animal('Буренок', 12, 12);
/// Задание
class Dog extends Animal {
    constructor(name, age, weight, isGuard) {
        super(name, age, weight); // обязательно вызываем и дублируем конструктор родителя
        this.isGuarder = isGuard; // добавляем свое свойство
    }
    #isGuard;
    speak() {
        console.log('Gav Gav Gaav');
    }
    set isGuarder(newisGuard) {
        if (typeof newisGuard === 'boolean') {
            this.#isGuard = newisGuard;
        } else {
            console.log('isGuard может быть только булевым');
        }
    }
    get isGuarder() {
        return this.#isGuard;
    }
}
const cow1 = new Cow('Буренка', 12, 500);
const cow2 = new Cow('Зорька', 12, 500);
const chicken1 = new Chicken('Василий', 2, 10);
const chicken2 = new Chicken('Петр', 4, 15);
const dog = new Dog('Сэм', 12, 2, true);

const farmAnimals = [cow1, cow2, chicken1, chicken2];
function feedAllAnimals(farmAnimals) {
    for (let method of farmAnimals) {
        method.speak();
        method.weighter = method.weighter + 0.5; // используя сеттер весса, добавим вес
        if (method instanceof Dog) {
            // для проверки принадлежности классу/объектным типам
            if (method.isGuarder === false) {
                console.log('Не сторожевая');
            } else {
                console.log('сторожевая');
            }
        }
    }
}
farmAnimals.push(dog);
feedAllAnimals(farmAnimals);

//typeof - для примитивных типов (string, number, boolean, и т.д.)

//instanceof - для проверки принадлежности классу/объектным типам
// super() инициализирует родительскую часть объекта
// static Принадлежит классу, а не объектам (экземплярам) и Вызывается через сам класс, а не через объект
