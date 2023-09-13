// Завдання 2
// Створіть словник власних визначень, використовуючи Generic function. В середині повинні бути
// визначення для трьох властивостей – ключ, значення, опис (різних типів даних). Для отримання чи
// запису використовуйте get/set реалізації доступу. Також для полів необхідно використовувати
// модифікатори доступу (на ваш розсуд). В підсумку повинний вийти словник термінів, отримуючи у
// вхідний параметр різні типи даних для реалізації

class WordDescriptionPair<TWord, TDescription> {
  //робимо приватну властивість яка приймає тип даних з дженерика
  private _word: TWord;

  //метод для встановлення приватної властивості з перевіркою
  public set word(value: TWord) {
    if (value === null || value === undefined) {
      throw new Error('Значення value для word не може бути порожнім');
    }
    this._word = value;
  }

  public get word(): TWord {
    return this._word;
  }

  private _description: TDescription;

  public set description(value: TDescription) {
    if (value === null || value === undefined) {
      throw new Error('Значення value для description не може бути порожнім');
    }
    this._description = value;
  }

  public get description(): TDescription {
    return this._description;
  }
}

// const setWordDescription = new WordDescriptionPair<string, string>();
// setWordDescription.word = 'IT';
// setWordDescription.description = 'Internet Technologies';
// setWordDescription.description = 'Intern Tech';

// console.log(setWordDescription);

// описуємо що в клас потрапляє дженерик з типом даних TWord, TDescription
class Dictionary<TWord, TDescription> {
  // описуємо що в дату потрапляє масив з типом даних TWord, TDescription
  private data: WordDescriptionPair<TWord, TDescription>[] = [];

  // додаємо в словник слова
  public add(word: TWord, description: TDescription) {
    //   створюємо екземпляр класу з типами змінних TWord, TDescription
    const entries = new WordDescriptionPair<TWord, TDescription>();
    // вносимо дані
    entries.word = word;
    entries.description = description;
    //   додаємо дані в масив
    this.data.push(entries);
  }

  // пошук опису по слові, повертає або тип даних TDescription, або null якщо нічого немає
  public getDescription(word: TWord): TDescription | null {
    const entry = this.data.find(item => item.word === word);
    return entry ? entry.description : null;
  }
}

const dictionary = new Dictionary<string, string>();
dictionary.add('IT', 'Internet Technologies');
dictionary.add('CRUD', 'Create Read Update Delete');
dictionary.add('JS', 'JavaScript');
dictionary.add('TS', 'TypeScript');

console.log(dictionary.getDescription('JS'));
console.log(dictionary);
