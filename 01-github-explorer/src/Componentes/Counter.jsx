import { useState } from "react"; // hook

// imutabilidade
// usuarios = ['diego3g', 'diegosf', 'danileao']
// usuarios.push('rafacamarda')
// react faz-se assim
// novoUsuarios = [...usuarios, 'rafacamarda']

export function Counter (){

    const [counter, setCounter] = useState(0);

    function increment () {
        setCounter(counter + 1); // conceito da imutabilidade nesta linha de codigo
        console.log('Incrementing')
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    );
}