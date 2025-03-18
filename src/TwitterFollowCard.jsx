import { useState } from "react";

export function TwitterFollorCard ({ userName, name}) {

    const [isFollowing,setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'followCard-button is-following' : 'followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article>
            <header>
                <img alt="El avatar" src={`https://unavatar.io/${userName}`}/>
                <div>
                    <strong>{name}</strong>
                    <span>{`@${userName}`}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}