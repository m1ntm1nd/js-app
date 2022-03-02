import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Info Page");
    }

    async getHtml (){
        return `
            <h1> No INFO is provided yet <h1>
            <p>
                Get back in a few hours, work will be done shortly.
            </p>
        `;
    }
}