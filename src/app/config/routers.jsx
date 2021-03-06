import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Home from "../components/Home.jsx";
import Main from "../components/Main.jsx";
import PromptContainer from "../containers/PromptContainer.jsx"
import ConfirmBattleContainer from "../containers/ConfirmBattleContainer.jsx"
import ResultContainer from "../containers/ResultContainer.jsx"
let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="playerOne" header="PlayOne" component={PromptContainer}></Route>
            <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer}></Route>
            <Route path="battle" component={ConfirmBattleContainer} />
            <Route path="results" component={ResultContainer} />
        </Route>
    </Router>
)

export default routes;