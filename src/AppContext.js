// Реализация через Context

import React from "react";
import Balance from "./components/AppContext/Balance";
import CashNeed from "./components/AppContext/CashNeed";
import Menu from "./components/AppContext/Menu";
import { useRenderEffect } from "./hooks/useRenderEffect";

function App() {
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	return (
		<div ref={ref} className="App">
			<div className="app_title">Context</div>
			<Balance />
			<CashNeed />
			<Menu />
		</div>
	);
}

export default App;