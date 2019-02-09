"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
run();
function run() {
    populateTestRoutesUI();
}
function populateTestRoutesUI() {
    routes_1.listOfRoutes.map(function (route) { return document.querySelector(".list-of-test-routes")
        .appendChild(generateHTML(route)); });
}
function generateHTML(route) {
    var container = document.createElement("div");
    container.className = "route-container";
    var info = document.createElement("div");
    info.className = "route-info";
    container.appendChild(info);
    do {
        var url = document.createElement("label");
        url.className = "route-info-url";
        url.innerText = "URL: " + route.url;
        info.appendChild(url);
    } while (false);
    var actions = document.createElement("div");
    actions.className = "route-actions";
    container.appendChild(actions);
    do {
        var allowExecution = document.createElement("input");
        allowExecution.type = "checkbox";
        actions.appendChild(allowExecution);
        var executeRoute = document.createElement("button");
        executeRoute.innerText = "Run Route";
        executeRoute.addEventListener("click", function () {
            routes_1.request(route.url, route.func);
        });
        actions.appendChild(executeRoute);
    } while (false);
    return container;
}
