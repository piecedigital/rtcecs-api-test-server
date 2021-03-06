import InitRoutes, { RouteListItem, request, listOfRoutes } from "./routes";
import * as pb from "./pb-handlers";

export const protos = new pb.Protos();

protos.onProtosLoad = () => {
    run();
}

function run() {
    InitRoutes(protos);
    populateTestRoutesUI();
}

function populateTestRoutesUI() {
    listOfRoutes.map(route => document.querySelector(".list-of-test-routes")
        .appendChild(generateHTML(route)));
}

function generateHTML(route: RouteListItem) {
    const container = document.createElement("div");
    container.className = "route-container";

    do {
        const padder = document.createElement("div")
        padder.className = "padder";
        container.appendChild(padder);

        do {
            const info = document.createElement("div");
            info.className = "route-info";
            padder.appendChild(info);
            do {

                const url = document.createElement("label");
                url.className = "route-info-url";
                url.innerText = `URL: ${route.url}`;
                info.appendChild(url);

                const code = document.createElement("pre");
                code.className = "route-info-code";
                console.log(route.data);

                code.innerText = `${JSON.stringify(route.data)}`;
                info.appendChild(code);
            } while (false);

            const actions = document.createElement("div");
            actions.className = "route-actions";
            padder.appendChild(actions);
            do {
                const allowExecution = document.createElement("input");
                allowExecution.type = "checkbox";
                actions.appendChild(allowExecution);

                const executeRoute = document.createElement("button");
                executeRoute.innerText = "Run Route";
                executeRoute.addEventListener("click", () => {
                    request(route);
                });
                actions.appendChild(executeRoute);
            } while (false);
        } while (false);
    } while (false);

    return container;
}