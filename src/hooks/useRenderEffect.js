// Визуальное отображение перерисовки (не знал, что в devTools есть подобный визуализатор)

import { useRef } from "react";

export const useRenderEffect = () => {
	const ref = useRef();
	const renderEffect = () => {
		ref.current?.classList.remove("rendered");
		setTimeout(() => { // Выгоняем добавление класса в конец очереди. К этому моменту в current уже будет лежать ссылка на узелок.
			ref.current.classList.add("rendered");
		});
	};
	return [ref, renderEffect];
};