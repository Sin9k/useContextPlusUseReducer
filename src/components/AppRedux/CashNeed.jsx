import { useDispatch, useSelector } from "react-redux";
import { useRenderEffect } from '../../hooks/useRenderEffect';

function CashNeed() {
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	const dispatch = useDispatch();
	const need = useSelector((s) => s.need);
	const setCashNeedMiddleWare = (e) =>{
		const value = parseInt(e.target.value);
		dispatch({type:'CASH_NEED', payload: (isNaN(value) ? 0 : value)});
	}
	
	return (
		<div ref={ref}>
			<input
				value={need}
				onChange={setCashNeedMiddleWare}
			/>
		</div>
	);
}

export default CashNeed;