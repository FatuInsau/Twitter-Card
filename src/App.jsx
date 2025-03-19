import './App.css'
import { TwitterFollorCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        firstFollowing: true,
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        firstFollowing: false,
    },
    {
        userName: 'vxnder',
        name: 'Elon Musk',
        firstFollowing: false,
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        firstFollowing: true
    },
]

export function App () {
    return (
        <div className='App'>
            {
                users.map(user => {
                    const { userName, name, firstFollowing } = user;
                    return (
                        <TwitterFollorCard
                        key={userName}
                        userName={userName}
                        name={name}
                        firstFollowing={firstFollowing}/>
                    )
                })
            }
        </div>
        
    )
}