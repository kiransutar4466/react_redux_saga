import store from '../../store/store'
import { PAGE_STATE } from '../../libs/constant'

export const componentKey = 'HOME_SECTION'

const { actions } = store.reducerManager.add({
    key: componentKey,
    addedReducers: {
        setLoadingState: (state, action) => {
            state.loadingState = action.payload
        },
    },
    initialReducerState: {
        loadingState: { state: PAGE_STATE.LOADING, message: '' },
    }
})

export const { setLoadingState } = actions