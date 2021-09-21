import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repositoryName = 'unform2';

const repository = {
    name: "unform2",
    description: "Forms in React" ,
    link: "https://github.com/unform/unform"
};

export function RepositoryList (){
    return (
                <section className="repository-list">
                <h1> Lista de repositorios</h1>

                <ul>
                    <RepositoryItem repository={repository} />
                    // <RepositoryItem repository={repository} />
                    // <RepositoryItem repository={repository} />
                    // <RepositoryItem repository={repository} />
               </ul>
                </section>
    );
}
