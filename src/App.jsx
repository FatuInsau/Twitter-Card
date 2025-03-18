import './App.css'
import { TwitterFollorCard } from './TwitterFollowCard'

export function App () {
    return (
        <div className='App'>
            <TwitterFollorCard isFollowing={false} userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollorCard isFollowing userName="midudev" name="Miguel Ángel Durán"/>
            <TwitterFollorCard isFollowing={false} userName="vxnder" name="Elon Musk"/>
        </div>
        
    )
}