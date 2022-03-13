// Копирование объектов

const obj = {
	name: "Jon",
	age:30
}

const obj1 = obj;//копирование по ссылки
// console.log(obj1);

// Клонирование объектов

const obj2 = Object.assign({}, obj);//с пом метода  Object.assign
// console.log(obj2);

const obj3 = { ...obj};//с пом метода ...spred но не будет геттеров и сеттеров
// console.log(obj3);

const obj4 = JSON.stringify(obj);//с пом метода JSON
JSON.parse(obj4);
console.log(obj4);

// если в объект вложен другой то использ библиотека lodash   — метод _.cloneDeep(obj)