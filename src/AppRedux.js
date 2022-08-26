// Реализация через Redux

import Balance from './components/AppRedux/Balance';
import CashNeed from './components/AppRedux/CashNeed';
import Menu from './components/AppRedux/Menu';
import { useRenderEffect } from './hooks/useRenderEffect';
function App() {
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	return (
		<div ref={ref} className="App">
			<div className="app_title">Redax</div>
			<Balance />
			<CashNeed />
			<Menu />
		</div>
	);
}

export default App;
