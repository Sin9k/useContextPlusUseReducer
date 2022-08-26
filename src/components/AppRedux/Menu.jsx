import { useDispatch } from "react-redux";
import { useRenderEffect } from "../../hooks/useRenderEffect";

function Menu() {
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	const dispatch = useDispatch();
	
	const addCash = () => {
		dispatch({ type: "ADD_CASH" });
	};

	const getCash = () => {
		dispatch({ type: "GET_CASH" });
	};
	
	return (
		<div ref={ref} style={{ display: "flex" }}>
			<button onClick={getCash}>Снять со счета</button>
			<button onClick={addCash}>Пополнить счет</button>
		</div>
	);
}

export default Menu;