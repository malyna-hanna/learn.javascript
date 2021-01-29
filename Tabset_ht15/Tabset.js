class Tabset {
    static WRAPPER_CLASS = 'tabset-wrapper';
    static ELEMENTS_CLASS = 'tabset-element';
    static ELEMENTS_LIST_CLASS = 'tabset-elements';
    static TITLES_LIST_CLASS = 'tabset-titles';
    static TITLE_CLASS = 'tabset-heading';
    static TITLE_SELECTOR_CLASS = 'title';
    static BODY_CLASS = 'tabset-body';
    static BODY_SELECTOR_CLASS = 'body';

    static ACTIVE_CLASS = 'active';

    constructor(container) {
        this.container = container;

        this.init();
    }

    init() {
        this.wrapContainer();
        this.copyTitles();
        this.addEventListener();
        this.tabContents = document.getElementsByClassName(Tabset.ELEMENTS_CLASS);
        this.tabHeaders = document.getElementsByClassName(Tabset.TITLE_CLASS);
        this.show(0);
    }

    wrapContainer() {
        this.titlesList = document.createElement('div');
        this.titlesList.className = Tabset.TITLES_LIST_CLASS;

        const wrapper = document.createElement('div');
        wrapper.className = Tabset.WRAPPER_CLASS;
        wrapper.appendChild(this.titlesList);

        this.container.parentNode.insertBefore(wrapper, this.container);
        wrapper.appendChild(this.container);

        this.container.classList.add(Tabset.ELEMENTS_LIST_CLASS);
    }

    copyTitles() {
        Array.prototype.forEach.call(this.container.children, (el) =>
            el.classList.add(Tabset.ELEMENTS_CLASS)
        );

        Array.prototype.forEach.call(
            this.container.querySelectorAll(`.${Tabset.TITLE_SELECTOR_CLASS}`),
            (el) => {
                this.titlesList.appendChild(el);
                el.classList.add(Tabset.TITLE_CLASS);
            }
        );

        Array.prototype.forEach.call(
            this.container.querySelectorAll(`.${Tabset.BODY_SELECTOR_CLASS}`),
            (el) => el.classList.add(Tabset.BODY_CLASS)
        );
    }

    addEventListener() {
        this.titlesList.addEventListener('click', (e) => this.onTitleClick(e));
    }

    onTitleClick(e) {
        const element = e.target
        const index = Array.prototype.indexOf.call(element.parentElement.children, element)
        this.hideAll();
        this.show(index);
    }

    hideAll() {
        for(let i = 0; i < this.tabContents.length; i++){
            this.hide(i);
        }
    }

    hide(index) {
        this.tabContents[index].style.display = "none";
        this.tabHeaders[index].style.border = "1px solid transparent";
    }

    show(index) {
        this.tabContents[index].style.display = "block";
        this.tabHeaders[index].style.border = "3px solid #FF0000";
    }
}
