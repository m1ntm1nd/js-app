import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("NetPage");
    }

    async getHtml (){
        return `
            <h1> About Networks <h1>
            <p>
                Get back in a few hours, work will be done shortly.
            </p>
        `;
    }
}