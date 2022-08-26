import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/redux";
import "./style/index.css";
import AppRedux from "./AppRedux";
import AppSimple from "./AppSimple";
import AppContext from "./AppContext";
import AppNothing from "./AppNothing";
import { Bank } from "./context/Bank";
import context from './store/context';


ReactDOM.createRoot(document.getElementById("app_simple")).render(
	<AppSimple />,
);

ReactDOM.createRoot(document.getElementById("app_redux")).render(
	<Provider store={store}>
		<AppRedux />
	</Provider>,
);

ReactDOM.createRoot(document.getElementById("app_context")).render(
	<Bank.Provider value={context}>
		<AppContext />
	</Bank.Provider>
);

ReactDOM.createRoot(document.getElementById("app_window")).render(
	<AppNothing />
);

