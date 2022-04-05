// khởi tạo giá trị mặc định cho localStorage
let data = [
    {
        id: 1,
        name: 'PERU WHOLE BEAN',
        imgUrl: './assets/images/shop/product-1-600x503.png',
        price: '£33 – £35',
        description: 'The coffee is brewed by first roasting the green coffee beans over hot coals in brazier.Once the beans are roasted each participant is given an opportunity to sample The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.',
    },
    {
        id: 2,
        name: 'NICARAGUA 100% ARABICA',
        imgUrl: './assets/images/shop/product-4-600x503.png',
        price: '£43 – £45',
        description: 'The coffee is brewed by first roasting the green coffee beans over hot coals in brazier.Once the beans are roasted each participant is given an opportunity to sample The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.',
    },
    {
        id: 3,
        name: 'NICARAGUA TRADITIONAL',
        imgUrl: './assets/images/shop/product-22-600x503.png',
        price: '£22 – £23',
        description: 'The coffee is brewed by first roasting the green coffee beans over hot coals in brazier.Once the beans are roasted each participant is given an opportunity to sample The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.',
    },
    {
        id: 4,
        name: 'KENYA COFFEE',
        imgUrl: './assets/images/shop/product-7-600x503.png',
        price: '£38 – £45',
        description: 'The coffee is brewed by first roasting the green coffee beans over hot coals in brazier.Once the beans are roasted each participant is given an opportunity to sample The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.',
    },
    {
        id: 5,
        name: 'GUATEMALA COFFEE',
        imgUrl: './assets/images/shop/product-5-600x503.png',
        price: '£36 – £56',
        description: 'The coffee is brewed by first roasting the green coffee beans over hot coals in brazier.Once the beans are roasted each participant is given an opportunity to sample The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.',
    },
    {
        id: 6,
        name: 'ETHIOPIA COFFEE',
        imgUrl: './assets/images/shop/product-6-600x503.png',
        price: '£65 – £67',
        description: 'The coffee is brewed by first roasting the green coffee beans over hot coals in brazier.Once the beans are roasted each participant is given an opportunity to sample The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.',
    }
]
window.localStorage.setItem('products', JSON.stringify(data));
