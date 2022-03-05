import Mainpage from "./views/Mainpage.js"
import InfoPage from "./views/InfoPage.js"
import NetPage from "./views/NetPage.js"
import ContractsPage from "./views/ContractsPage.js"

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view:  Mainpage},
        { path: "/info", view:  InfoPage},        
        { path: "/net", view: NetPage},
        { path: "/cntrcts", view: ContractsPage} 
    ];

    const potentialMatches = routes.map(route => {
        return {
            route:route,
            result: location.pathname === route.path
        };
    });
    
    let match = potentialMatches.find(potentialMatch => potentialMatch.result);

    if (!match) {
        match = {
            route:routes[0],
            result: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
    //console.log(match.route.view());
    
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});


// let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

// if (!match){
//     match = {
//         route: routes[0],
//         result: [location.pathname]
//     };
// }

// const view = new match.route.view(getParams(match));
