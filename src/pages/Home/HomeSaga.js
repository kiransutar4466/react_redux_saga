import store from '../../store/store'
import { all, put, takeLatest } from 'redux-saga/effects'
import { componentKey, setLoadingState } from './HomeSlice'
import { PAGE_STATE } from '../../libs/constant'
import HomeDataService from '../../services/HomeDataService'

export const { getHomeDetails } = {
    getHomeDetails: (payload) => {
        return {
            type: 'HOME/ACTION_EXAMPLE',
            payload
        }
    },
}

function* getHomeDetailsAsync(action) {

    try {
        console.log(action)
        console.log('Saga function executed')
        yield put(setLoadingState({ state: PAGE_STATE.LOADING, message: 'Fetching Payers List' }))

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEsInV1aWQiOiI2Mjc5M2ZjYS02YWY1LTQ3N2YtYjQxYi0wNmZmZTZlMWQyZmEiLCJmaXJzdE5hbWUiOiJNdWt1bCBQTSIsIm1pZGRsZU5hbWUiOm51bGwsImxhc3ROYW1lIjoiWmFucHVyZSIsImVtYWlsIjoibXVrdWxwbUBtYWlsaW5hdG9yLmNvbSIsInJvbGUiOiJQcmFjdGljZSBNYW5hZ2VyIiwidXNlcl90eXBlX2lkIjo2LCJpYXQiOjE2OTMwNTMwNDYsImV4cCI6MTY5MzkxNzA0Nn0.35AKjvmliQdBLvxYAG2-pNWbG-KHQ4opl36DSdHUWPM'

        const response = yield HomeDataService.getApiDetails(token)
        console.log('🚀 ~ file: HomeSaga.js:24 ~ function*getHomeDetailsAsync ~ response:', response)

    } catch (error) {
        console.log('err: ', error)
    }

}

function* rootSaga() {
    yield all([
        takeLatest(getHomeDetails().type, getHomeDetailsAsync),
    ])
}

store.sagaManager.addSaga(componentKey, rootSaga)