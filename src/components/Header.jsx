//<Header />  componentes sempre devem começar com letra maiúscula, pra não confundir com tags HTML

//<header />  tags HTML sempre devem começar com letra minúscula

import styles from './Header.module.css';  // importando o componente Header para o App

import igniteLogo from '../assets/ignite-logo.svg';

console.log(igniteLogo);

export function Header() {
    return (
        <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    );
}


