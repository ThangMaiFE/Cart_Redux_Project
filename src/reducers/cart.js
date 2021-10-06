import * as Types from './../constants/ActionTypes';
//get up data in localStorage 
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
   

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            }
            else {
                state.push({
                    product,
                    quantity
                });
            }
            //update data in localStorage
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];

        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                //delete the element 1 in arrary(initialState)
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];

        case Types.UPDATE_QUANTITY:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    } return index;
}

export default cart;