import {GET_DATA_SUCCESS, SET_FAVOURITE} from './actions'

const initialState = {
    data: null
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_DATA_SUCCESS: {
            let result = {...action.payload} //?
            result.Quotes = result.Quotes.map(q => ({...q, is_favourite: false}))
            return result
        }
        case SET_FAVOURITE: {
            const {QuoteId} = action.payload
            let new_quotes = [...state.Quotes]
            new_quotes.find(q=>q.QuoteId ==QuoteId).is_favourite = !new_quotes.find(q=>q.QuoteId ==QuoteId).is_favourite
            return {
                ...state,
                Quotes: new_quotes
            }
        }
        default: return state
    }
}

export default reducer