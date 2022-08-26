// Реализация через Ничто

import React from "react";
import Balance from "./components/AppNothing/Balance";
import CashNeed from "./components/AppNothing/CashNeed";
import Menu from "./components/AppNothing/Menu";

function App() {
	return (
		<div className="App">
			<div className="app_title">Nothing</div>
			<Balance />
			<CashNeed />
			<Menu />
		</div>
	);
}

export default App;