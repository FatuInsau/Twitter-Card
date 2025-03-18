export function TwitterFollorCard ({ userName, name, isFollowing}) {
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
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}