import { useRenderEffect } from "../../hooks/useRenderEffect";
import nothing from "../../store/nothing";

function CashNeed() {
	const need = nothing.useState("need", 0);
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();

	return (
		<input
			ref={ref}
			value={need}
			onChange={nothing.inputFilter.bind(nothing)}
		/>
	);
}

export default CashNeed;