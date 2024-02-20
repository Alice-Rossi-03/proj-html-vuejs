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
    
    ]
})