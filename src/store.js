import { reactive } from 'vue' 

export const store = reactive ({
    featuresList:[
        {
            name: 'Live Streaming',
            icon:'features-icon-1.png',
            fa: 'fa-brands fa-twitch',
            infos: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem possimus ex similique nobis labore fugiat? Quam dolorem laudantium praesentium ab cumque, sequi voluptates perferendis quibusdam?'
        },
        {
            name: 'Great Tournament',
            fa: 'fa-solid fa-trophy',
            icon: 'features-icon-2.png', 
            infos: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem possimus ex similique nobis labore fugiat? Quam dolorem laudantium praesentium ab cumque, sequi voluptates perferendis quibusdam?'
        },
        {
            name: 'Gaming News',
            fa: 'fa-solid fa-newspaper',
            icon: 'features-icon-3.png', 
            infos: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem possimus ex similique nobis labore fugiat? Quam dolorem laudantium praesentium ab cumque, sequi voluptates perferendis quibusdam?'
        },
    ],
    listItems:[
        {
            name: 'Home',
            link: '#',
            active: true, 
        },
        {
            name: 'Games ▼',
            link: '#',
            active: false
        },
        {
            name: 'Shop ▼',
            link: '#',
            active: false
        },
        {
            name: 'Pages ▼',
            link: '#',
            active: false
        },
        {
            name: 'Blog ▼',
            link: '#',
            active: false
        },
        {
            name: 'Contacts',
            link: '#',
            active: false
        },
    
    ],
    vsCardList:[
        {
            name: 'Bool Of Duty',
            date: 'December 25, 2022 4:00 PM',
            opponentOne: 'game-img-1.png' ,
            opponentTwo: 'game-img-2.png',
        },
        {
            name: 'Boolendary Battles',
            date: 'December 25, 2022 4:00 PM',
            opponentOne: 'game-img-3.png' ,
            opponentTwo: 'game-img-4.png',
        },
        {
            name: 'Nay Corral Booldown',
            date: 'December 25, 2022 4:00 PM',
            opponentOne: 'game-img-5.png' ,
            opponentTwo: 'game-img-6.png',
        },
        {
            name: 'Bool Of Legends',
            date: 'December 25, 2022 4:00 PM',
            opponentOne: 'game-img-7.png' ,
            opponentTwo: 'game-img-8.png',
        }
    ],
    reviewsList:[
        {
            name: 'Emilia Ferrari',
            rating: 9.7,
            review: 'I absolutely love my Bose QuietComfort 35 II headphones! The noise cancellation is top-notch, allowing me to immerse myself in my music without any distractions. The sound quality is fantastic, with crisp highs and deep, rich bass. Definitely worth the investment',
            country: 'Italy',
            img: 'user-image-2.png'
        },
        {
            name: 'James Smith',
            rating: 7.3,
            review: 'The Apple iPad Pro is a game-changer! The large 12.9-inch screen is stunning, perfect for watching movies, browsing the web, or getting work done.',
            country: 'England',
            img:'user-image-1.png'
        },
        {
            name: 'Olivia Williams',
            rating: 9.4,
            review: 'I cant say enough good things about the Instant Pot Duo! It has completely revolutionized the way I cook. Its incredibly versatile, allowing me to sauté, steam, slow cook, and more, all in one pot. The pressure cooking feature saves me so much time, making delicious meals in a fraction of the time it would take on the stove.',
            country: 'USA',
            img:'user-image-4.png'
        },
        {
            name: 'Benjamin Taylor',
            rating: 8.8,
            review: 'The Dyson V11 Torque Drive is hands down the best vacuum cleaner Ive ever owned! Its lightweight and easy to maneuver, making cleaning a breeze. While its a bit pricey, the performance and convenience it offers are well worth it!',
            country: 'Australia',
            img:'user-image-3.png'
        },
        {
            name: 'Jean-Luc Dubois',
            rating: 7.8,
            review: 'The Dyson V11 Torque Drive is hands down the best vacuum cleaner Ive ever owned! Its lightweight and easy to maneuver, making cleaning a breeze. While its a bit pricey, the performance and convenience it offers are well worth it!',
            country: 'France',
            img:'user-image-1.png'
        },
        {
            name: 'Lars Olsen',
            rating: 8.1,
            review: 'The Dyson V11 Torque Drive is hands down the best vacuum cleaner Ive ever owned! Its lightweight and easy to maneuver, making cleaning a breeze. While its a bit pricey, the performance and convenience it offers are well worth it!',
            country: 'Norway',
            img:'testimonials-image-1.png'
        },
        {
            name: 'Yuki Tanaka',
            rating: 9.8,
            review: 'The Dyson V11 Torque Drive is hands down the best vacuum cleaner Ive ever owned! Its lightweight and easy to maneuver, making cleaning a breeze. While its a bit pricey, the performance and convenience it offers are well worth it!',
            country: 'Japan',
            img:'testimonials-image-3.png'
        },
        {
            name: 'Rajesh Patel',
            rating: 4.8,
            review: 'The Dyson V11 Torque Drive is hands down the best vacuum cleaner Ive ever owned! Its lightweight and easy to maneuver, making cleaning a breeze. While its a bit pricey, the performance and convenience it offers are well worth it!',
            country: 'India',
            img:'testimonials-image-2.png'
        },
    ],
    articlesList:[
        {
            name: 'Top 5 Most Important Aspects Of Your Game',
            img: 'blog-item-2.png'
        },
        {
            name: 'The Rise Of Fantasy Sports And Online Friends',
            img: 'blog-item-3.png'
        },
        {
            name: 'Benefits Of Gaming - PC And Video-games',
            img: 'blog-item-4.png'
        }
    ]
})