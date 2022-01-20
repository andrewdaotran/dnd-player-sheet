export const tempReducer = (state, action) => {
	console.log('whats up')
	return state
}

export const addDataReducer = (state, action) => {
	return (state = { ...state, ...action.payload })
}
