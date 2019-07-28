class Controller {
    constructor(view, model) {
        this._view = view;
        this._model = model;

        this._addCategoryListener();
        this._viewPage('all');
    }

    _addCategoryListener() {
        document.getElementById('categories').addEventListener('click', (event) => {
            if (event.target.type === 'radio') {
                this._viewPage(event.target.id);
            }
        });
    }

    _viewPage(type) {
        if ($('#container').length) {
            this._view.clear();
        }
        this._view.addItems(this._model.getPage(type));
    }
}

const controller = new Controller(view, model);
