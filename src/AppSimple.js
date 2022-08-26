// Обычная реализация из обучалок YouTube'а

import { useState } from "react";
import Balance from './components/AppSimple/Balance';
import CashNeed from './components/AppSimple/CashNeed';
import Menu from './components/AppSimple/Menu';
import { useRenderEffect } from './hooks/useRenderEffect';

function App() {
	const [cash, setCash] = useState(0);
	const [need, setNeed] = useState(0);
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	const setCashNeedMiddleWare = (money) => {
		setNeed(isNaN(money) ? 0 : money);
	};
	
	const addCash = () => {
		setCash(cash + need);
	};

	const getCash = () => {
		setCash(cash - need);
	};

	return (
		<div ref={ref} className="App">
			<div className="app_title">Simple</div>
			<Balance cash={cash}/>
			<CashNeed need={need} callback={setCashNeedMiddleWare}/>
			<Menu addCash={addCash} getCash={getCash}/>
		</div>
	);
}

export default App;