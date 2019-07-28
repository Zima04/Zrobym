class View {
    constructor() {
        this._template = document.getElementById('publication-template');
    }

    _build(item) {
        this._template.content.getElementById('template-image').src = item.src;
        this._template.content.getElementById('template-header').textContent = item.header;
        this._template.content.getElementById('template-address').textContent = item.address;
        this._template.content.getElementById('template-tag').textContent = item.tag;

        return document.importNode(this._template.content, true);
    }

    addItems(items) {
        const container = document.createElement('div');
        container.id = 'container';
        items.forEach((item) => {
            container.appendChild(this._build(item));
        });
        $('main').after(container);
    }

    clear() {
        $('main').next().remove();
    }
}

const view = new View();
