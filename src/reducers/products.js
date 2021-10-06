var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        price: 500,
        description: 'Sản phẩm do Apple sản xuất',
        image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg',
        inventory: 6,
        rating :4

    },
    {
        id: 2,
        name: 'Iphone 8 Plus',
        price: 800,
        description: 'Sản phẩm do Apple sản xuất',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-600x600.jpg',
        inventory: 10,
        rating :3

    },
    {
        id: 3,
        name: 'Iphone xs Max',
        price: 1000,
        description: 'Sản phẩm do Apple sản xuất',
        image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
        inventory: 3,
        rating :5

    }
]

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;