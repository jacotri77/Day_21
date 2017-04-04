const initialState ={
	dataAction: []
}

export default function (state= initialState, action){
	switch(action.type){
		case action.GET_DATA:
		return{...state, action: action.dataAction}
		default:
			return state
	}
}
