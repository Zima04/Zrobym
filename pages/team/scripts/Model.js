class Model {
    constructor(collection) {
        this._collection = collection;
    }

    getAll() {
        return this._collection;
    }
}

const model = new Model(collection);
