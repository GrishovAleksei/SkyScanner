import {takeEvery, put, call} from 'redux-saga/effects'
import {GET_DATA, GET_DATA_SUCCESS} from './actions'
import moment from 'moment'

const date = new Date()
const dateStart = moment(date).format('YYYY-MM-DD')
const url = `https://rapidapi.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/VKO-sky/SVX-sky/${dateStart}`

function* handlerSaga() {
    yield takeEvery(GET_DATA, getData)
}

function* getData(action) {
    try {
        let res  =  yield call(fetch,url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "78cbbdcb5cmsh178d1dc70642dfcp18f10ejsn3f8fca4a7ace",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
            }, 
            "mode": 'no-cors'})
        let json =  yield call([res, 'json']) 
        yield put({
            type: GET_DATA_SUCCESS,
            payload: json,
        })
    } catch (err) {
        console.log(err)
    }
}

export default handlerSaga