import { useGlobal } from "../../hooks/useGlobal";
import { useRenderEffect } from "../../hooks/useRenderEffect";

function CashNeed() {
	const bank = useGlobal();
	const need = bank.useState("need", 0);
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();

	return (
		<input
			ref={ref}
			value={need}
			onChange={bank.inputFilter.bind(bank)}
		/>
	);
}

export default CashNeed;