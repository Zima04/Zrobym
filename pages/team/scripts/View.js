class View {
    constructor() {
        this._template = document.getElementById('person-template');
    }

    _build(person) {
        this._template.content.getElementById('template-image').src = person.src;
        this._template.content.getElementById('template-image-hidden').src = person.srcHidden;
        this._template.content.getElementById('template-name').textContent = `${person.name} ${person.surname}`;
        this._template.content.getElementById('template-position').textContent = `${person.position}`;

        return document.importNode(this._template.content, true);
    }

    addAll(stuff) {
        const container = document.createElement('div');
        container.classList.toggle('persons-container');
        container.addEventListener('mouseover', (event) => {
            if (event.target.src) {
                event.target.classList.toggle('hidden');
            }
        });
        container.addEventListener('mouseout', (event) => {
            if (event.target.src) {
                event.target.classList.toggle('hidden');
            }
        });

        stuff.forEach((person) => {
            container.appendChild(this._build(person));
        });

        $('#persons-header').after(container);
    }
}

const view = new View();
