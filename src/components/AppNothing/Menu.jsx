import { useRenderEffect } from "../../hooks/useRenderEffect";
import nothing from "../../store/nothing";

function Menu() {
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	return (
		<div ref={ref} style={{ display: "flex" }}>
			<button onClick={nothing.getCash.bind(nothing)}>Снять со счета</button>
			<button onClick={nothing.addCash.bind(nothing)}>Пополнить счет</button>
		</div>
	);
}

export default Menu;