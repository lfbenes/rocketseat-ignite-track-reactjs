export function RepositoryItem (props) {
    return(
            <li>
                <strong>{props.repository?.name ?? 'default'}</strong>
                <p>{props.repository?.description ?? 'Default in React'}</p>

                <a href={props.repository?.link}>
                    Acessar Repositorio
                </a>
            </li>

    );
}