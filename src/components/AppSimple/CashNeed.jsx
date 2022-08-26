import { useRenderEffect } from '../../hooks/useRenderEffect';

function CashNeed({need, callback}) {
	const [ref, renderEffect] = useRenderEffect();
	renderEffect();
	
	return (
		<div ref={ref} className="rendered">
			<input
				value={need}
				onChange={(e) => callback(parseInt(e.target.value))}
			/>
		</div>
	);
}

export default CashNeed;