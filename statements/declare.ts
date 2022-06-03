class BasePage {
    declare templateName: string;
    constructor() {
    }

    get template(): string {
        return this.templateName + '.html';
    }
}

class MainPage extends BasePage {
    public templateName: string
    constructor() {
        super();
        this.templateName = 'MainPage';
    }
}

const page = new MainPage;
console.log(page.template);