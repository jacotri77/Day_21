const initialState ={
	dataAction: []
}

export default function (state= initialState, action){
	switch(action.type){
		case 'GET_DATA':
		return{...state, dataAction: [...action.dataAction]}
		default:
			return state
	}
}
