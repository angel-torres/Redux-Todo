export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const DELETE_ITEMS = "DELETE_ITEMS";

export const addItem = item => {
    // console.log('action', item)
    return {
        type: "ADD_ITEM",
        payload: {
            item: item,
            completed: false,
        }
    }
}

export const toggleItem = index => {
    console.log(index)
    return {
        type: "TOGGLE_ITEM",
        payload: {
            index
        }
    }
}

export const deleteItems = () => {
    return {
        type: "DELETE_ITEMS"
    }
}