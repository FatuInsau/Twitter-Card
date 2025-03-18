import './App.css'
import { TwitterFollorCard } from './TwitterFollowCard'

export function App () {
    return (
        <div className='App'>
            <TwitterFollorCard userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollorCard userName="midudev" name="Miguel Ángel Durán"/>
            <TwitterFollorCard userName="vxnder" name="Elon Musk"/>
        </div>
        
    )
}