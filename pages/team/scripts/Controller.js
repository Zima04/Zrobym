class Controller {
    constructor(view, model) {
        this._view = view;
        this._model = model;

        this._viewAll();
    }

    _viewAll() {
        this._view.addAll(this._model.getAll());
    }
}

const controller = new Controller(view, model);
