import { Counter } from './Componentes/Counter';
import { RepositoryList } from './Componentes/RepositoryList';
import './styles/global.scss';

export function App () {
        // forcar um erro
        // throw new Error('Eita Giovana, o forninho caiu!');

        //return <h1>Hello World</h1>

        return (
            // <>
                    <RepositoryList />
                    // <Counter />
            // </>
        )
    }