import { useGlobal } from './../../hooks/useGlobal';
import { useRenderEffect } from '../../hooks/useRenderEffect';

function Balance() {
	const cash = useGlobal().useState('cash', 0);
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();

	return <div ref={ref} className="balance">{cash}</div>;
}

export default Balance;