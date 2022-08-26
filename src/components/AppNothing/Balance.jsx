import { useRenderEffect } from '../../hooks/useRenderEffect';
import nothing from '../../store/nothing';

function Balance() {
	const cash = nothing.useState('cash', 0);
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();

	return <div ref={ref} className="balance">{cash}</div>;
}

export default Balance;