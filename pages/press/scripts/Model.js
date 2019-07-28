class Model {
    constructor(collection) {
        this._collection = collection;
    }

    getPage(type) {
        return this._filter(type);
    }

    _filter(type) {
        if (type === 'all') {
            return this._collection;
        }

        const key = type === 'category-1' ? 'Журнал' : 'WEB';
        return this._collection.filter(item => item.tag === key);
    }
}

const model = new Model(collection);
