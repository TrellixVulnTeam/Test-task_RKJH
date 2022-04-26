import React from "react";
import App from "./App";
import { render } from "react-dom";
import {Provider} from "react-redux";
import { store } from "./store";

const div = document.createElement('div');
if (document.body) document.body.append(div);

render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    div,
);

