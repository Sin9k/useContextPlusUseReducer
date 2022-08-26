import { useGlobal } from "../../hooks/useGlobal";
import { useRenderEffect } from "../../hooks/useRenderEffect";

function Menu() {
	const bank = useGlobal();
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	return (
		<div ref={ref} style={{ display: "flex" }}>
			<button onClick={bank.getCash.bind(bank)}>Снять со счета</button>
			<button onClick={bank.addCash.bind(bank)}>Пополнить счет</button>
		</div>
	);
}

export default Menu;