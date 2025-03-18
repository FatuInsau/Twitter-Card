export function TwitterFollorCard ({ userName, name, isFollowing}) {
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'followCard-button is-following' : 'followCard-button'
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
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}