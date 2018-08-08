import {
    CHANGE_USER_STATE,
    CHANGE_CATEGORY_LIST
} from './const'

const mutations = {
    [CHANGE_USER_STATE] (state, payload) {
        state.user_state = payload.user_state
        console.log(state.user_state)
    },
    [CHANGE_CATEGORY_LIST] (state, payload) {
        state.category_list = payload.category_list
    }
}

export default mutations