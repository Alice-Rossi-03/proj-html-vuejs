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
    ]
})