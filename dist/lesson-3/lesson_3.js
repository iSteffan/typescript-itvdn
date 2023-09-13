class WordDescriptionPair {
    set word(value) {
        if (value === null || value === undefined) {
            throw new Error('Значення value для word не може бути порожнім');
        }
        this._word = value;
    }
    get word() {
        return this._word;
    }
    set description(value) {
        if (value === null || value === undefined) {
            throw new Error('Значення value для description не може бути порожнім');
        }
        this._description = value;
    }
    get description() {
        return this._description;
    }
}
class Dictionary {
    constructor() {
        this.data = [];
    }
    add(word, description) {
        const entries = new WordDescriptionPair();
        entries.word = word;
        entries.description = description;
        this.data.push(entries);
    }
    getDescription(word) {
        const entry = this.data.find(item => item.word === word);
        return entry ? entry.description : null;
    }
}
const dictionary = new Dictionary();
dictionary.add('IT', 'Internet Technologies');
dictionary.add('CRUD', 'Create Read Update Delete');
dictionary.add('JS', 'JavaScript');
dictionary.add('TS', 'TypeScript');
console.log(dictionary.getDescription('JS'));
console.log(dictionary);
//# sourceMappingURL=lesson_3.js.map