const defaultState = {
	cash: 0,
	need: 0
};

export const cashReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_CASH":
			return { ...state, cash: state.cash + state.need };
		case "GET_CASH":
			return { ...state, cash: state.cash - state.need };
		case "CASH_NEED":
			return { ...state, need: action.payload };
		default:
			return state;
	}
};