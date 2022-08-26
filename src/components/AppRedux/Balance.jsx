import { useSelector } from "react-redux";
import {useRenderEffect} from "../../hooks/useRenderEffect";

function Balance() {
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	const cash = useSelector((s) => s.cash);
	return <div ref={ref} className="balance">{cash}</div>;
}

export default Balance;