import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("MainPage");
    }

    async getHtml (){
        return `
            <h1> Your address is UNDEFINED yet <h1>
            <p>
                Get back in a few hours, work will be done shortly.
            </p>
        `;
    }
}