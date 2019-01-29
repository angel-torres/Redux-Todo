export const ADD_ITEM = "ADD_ITEM";

export const addItem = item => {
    // console.log('action', item)
    return {
        type: "ADD_ITEM",
        payload: {
            item: item
        }
    }
}