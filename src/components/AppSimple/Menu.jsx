import { useRenderEffect } from "../../hooks/useRenderEffect";

function Menu({addCash, getCash}) {
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	
	return (
		<div ref={ref} style={{ display: "flex" }}>
			<button onClick={getCash}>Снять со счета</button>
			<button onClick={addCash}>Пополнить счет</button>
		</div>
	);
}

export default Menu;