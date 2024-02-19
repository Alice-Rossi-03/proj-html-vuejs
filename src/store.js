import { reactive } from 'vue' 

export const store = reactive ({
    listItems:[
        {
            name: 'Home',
            link: '#'
        },
        {
            name: 'Games ▼',
            link: '#'
        },
        {
            name: 'Shop ▼',
            link: '#'
        },
        {
            name: 'Pages ▼',
            link: '#'
        },
        {
            name: 'Blog ▼',
            link: '#'
        },
        {
            name: 'Contacts',
            link: '#'
        },
    ]
})