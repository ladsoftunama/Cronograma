# Aula 2: Conclusão da Atividade Proposta

## Ambiente de Desenvolvimento

- **Criação de um Projeto React**

  - Iniciamos o projeto utilizando o comando `npx create-react-app nome-do-projeto`, estabelecendo a base para o desenvolvimento do nosso projeto React.
  - Damos início ao desenvolvimento na pasta **_src/page/index_**, onde concentraremos nossos esforços.

## Desenvolvimento com HTML, CSS Simples ou Tailwind CSS

#### Interface de codigo para manipular os components

```Javascript
import Head from "next/head";
import Widget_appBar from "@/components/appbar/widget";
import Widget_campo_texto from "@/components/inputTextNotas/widget";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - calculadora de notas</title>
        <meta name="description" content="calculadora de notas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="colunm">
        <Widget_appBar />
        <Widget_campo_texto />
        {/* <Widget_BTN /> */}
      </div>
    </>
  );
}
```

Temos os componentes **Widget_appBar, Widget_campo_texto **, que representam os elementos iniciais da nossa página. Optamos por um tema livre, escolhendo ["calculadora de notas"](https://github.com/marco0antonio0/calculadora-notas-faculdade/tree/master) para tornar o estudo mais envolvente.

O desenvolvimento foi realizado utilizando HTML,CSS e JavaScript.O desenvolvimento do [site calculadora de notas](https://calculadora-notas.nova-work.cloud/)
![img](/cronograma-front-end/arquivos/aaaa.png)
Os elementos como topbar campo de inserção de textos e botões modularizados como componentes e armazenados trechos de codigos separados para facilitar a manutenção como tambem upgarede de componentes individuais ex:

#### Components/appbar/widget.js

```javascript
import Image from "next/image";
import styles from "./style.module.css";
export default function Widget_appBar() {
  return (
    <>
      <div className={styles.container_1}>
        <div className={styles.img_logo}>
          <img src={"/images/logo.png"}></img>
        </div>
        <div className={styles.titulo}>
          <h1>Calculo de nota </h1>
          <h3>ciencias da computação</h3>
        </div>
      </div>
    </>
  );
}
```

#### Components/appbar/style.module.css

```CSS
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
.container_1 {
  display: flex;
  flex-direction: row;
  height: 120px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
}
.img_logo {
  display: flex;
  flex-direction: row;
  width: auto;
  height: 80%;
  margin: auto 50px;
  margin-right: 30px;
}
.img_logo img {
  margin: auto;
  height: 100%;
  width: 100%;
}
.titulo {
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  margin: auto 0;
}
.titulo h1 {
  color: rgba(65, 183, 132, 1);
  font-family: "Nunito", sans-serif;
  margin: 0;
}
.titulo h3 {
  color: rgba(65, 183, 132, 1);
  font-family: "Nunito", sans-serif;
  margin: 0;
  margin-top: -5px;
}

@media (max-width: 880px) {
  .container_1 {
    height: 90px;
  }
  .titulo h3 {
    font-size: 5mm;
  }
  .titulo h1 {
    font-size: 8mm;
  }
  .img_logo {
    height: 100%;
    margin-right: 15px;
  }
}
@media (max-width: 660px) {
  .container_1 {
    height: 85px;
  }
  .titulo h3 {
    font-size: 4.5mm;
  }
  .titulo h1 {
    font-size: 6mm;
  }
}
@media (max-width: 500px) {
  .titulo h3 {
    font-size: 4.5mm;
  }
  .titulo h1 {
    font-size: 6mm;
  }
  .img_logo {
    margin-left: 20px;
  }
}

```

- Acesse o site em [calculadora-notas.nova-work.cloud/](https://calculadora-notas.nova-work.cloud/)
- Acesse o **_codigo_** completo [clicando aqui](https://github.com/marco0antonio0/calculadora-notas-faculdade/tree/master)

Este processo proporcionou uma imersão prática e educativa, permitindo que os conceitos de React fossem aplicados de maneira contextualizada.
