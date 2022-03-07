import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("CntrctsPage");
    }

    async getHtml (){
        return `
            <h1> About Contracts <h1>
            <p>
                <table>
                    <tr>
                        <td> <a href="/" class="nav__link" data-link>  ERC20 </a> </td>
                    </tr>
                </table>
            </p>
        `;
    }

   
}


// const conract = {
//     abi: "0xasd131231asdasd",
//     name: "ERC20",
//     symbol: "E20",
// }
// console.log("Something works");

// console.log(contract);

// contract.name = "EToken";
// console.log(contract);

