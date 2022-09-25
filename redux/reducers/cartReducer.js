let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      {
        /* We need to check what do we have in action.payload */
      }
      {
        /* Is it the array of items we need for menu items */
      }
      if (action.payload.checkboxValue) {
        console.log("ADD TO CART");
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
          checkboxValue: action.payload.checkboxValue,
        };
      } else {
        console.log("REMOVE FROM CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
        };
      }

      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
