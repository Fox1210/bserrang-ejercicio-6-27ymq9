// En este ejercicio debéis crear una clase "Person" con las propiedades privadas "name" y "age" y la propiedad pública "saySomething". Añadid también el método "myNameIs" para que saque por consola el valor de la propidad "name".
//En su constructor, debéis dar un valor a cada propiedad (sin contar "myNameIs") teniendo claro que sus tipos son cadena de texto, número y función que recibe cadena y no devuelve nada, respectivamente.
// Luego, cread una clase "Developer" que herede de "Person" y que tenga la propiedad pública "bestLanguage". El tipo de la propiedad "bestLanguage" es función que recibe cadena y no devuelve nada.
// En el constructor de "Developer", debéis añadir los parámetros al constructor de la clase padre (super) y setear la propiedad "bestLanguage" sabiendo que es de tipo función que recibe una cadena.
// Cuando acabéis, debéis descomentar las siguientes líneas de código y colocarlas despúes de todo lo que añadáis:

//clase persona
class Person {
  //atributos
  private name: string;
  private age: number;
  public saySomething: (s: string) => void;
  public myNameIs = function() {
    console.log(this.name);
  };
  //Constructor
  constructor(name: string, age: number, saySomething: (s: string) => void) {
    this.name = name;
    this.age = age;
    this.saySomething = saySomething;
  }
} //fin class Person

//clase Developer
class Developer extends Person {
  //atributos
  public bestLanguage: (s: string) => void;
  //Constructor
  constructor(
    name: string,
    age: number,
    saySomething: (s: string) => void,
    bestLanguage: (d: string) => void
  ) {
    super(name, age, saySomething);
    this.bestLanguage = bestLanguage;
  }
} //fin class Developer

const developer = new Developer(
  "pedro",
  35,
  something => console.log(something),
  language => console.log(language + " is the best language")
);

developer.myNameIs();
developer.saySomething("algo");
developer.bestLanguage("Javascript");
