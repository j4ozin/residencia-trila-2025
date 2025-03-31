//<Header />  componentes sempre devem começar com letra maiúscula, pra não confundir com tags HTML

//<header />  tags HTML sempre devem começar com letra minúscula

import styles from './header' // importando o componente Header para o App

export function Header() {
    return (
        <header className='style.header'>
        <strong>Ignite Feed</strong>
        </header>
    );
}


