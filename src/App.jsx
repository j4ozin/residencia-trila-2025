import { Header } from './components/header'; // Importando o componente Header
import { Post } from './post'; // Importando o componente Post

import './global.css'; // Importando o arquivo de estilização global

export function App() {
  return (
    <div>
      <Header />
      <Post author="João" content="é mais de 8 mil" />
      <Post author="Maria" content="é mais de 9 mil" />
    </div>
  );
}


