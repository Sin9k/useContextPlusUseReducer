import { useRenderEffect } from '../../hooks/useRenderEffect';

function Balance({cash}) {
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	
	return <div ref={ref} className="balance rendered">{cash}</div>;
}

export default Balance;