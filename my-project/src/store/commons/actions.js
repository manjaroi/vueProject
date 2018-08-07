import axios from 'axios'

import { 
    CHANGE_CATEGORY_LIST
 } from './const'

 const actions = {
    action_get_category_list (context){
        axios.post('/list/json/reply/QueryCategoryListReq',{
            UserId: 0,
            SourceTypeSysNo: 2
        }).then(res => {
            let category_list = res
            console.log(category_list)
            context.commit({
                type: CHANGE_CATEGORY_LIST,
                category_list
            })
        })
    }
 }

 export default actions