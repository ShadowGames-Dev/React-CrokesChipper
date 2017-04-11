const basket = (state = [], action ) => {
	switch(action.type) {
		case 'ADD_ITEM':
			return [
				...state
			];
		default: return state;
	}
};