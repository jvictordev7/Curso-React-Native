import React from "react"
import { StyleSheet, SafeAreaView } from 'react-native'
import Mega from "./components/mega/Mega"


//import FlexBoxV4 from "./components/layout/FlexBoxV4"
//import FlexBoxV3 from "./components/layout/FlexBoxV3"
//import FlexBoxV2 from "./components/layout/FlexBoxV2"
//import DigiteSeuNome from "./components/DigiteSeuNome.js"
//import Quadrado from "./components/layout/Quadrado"
//import ListaProdutosV2 from "./components/produtos/ListaProdutosV2"
//import ListaProdutos from "./components/produtos/ListaProdutos"
//import ListaProdutos from "./components/produtos/ListaProdutos"
//import UsuarioLogado from "./components/UsuarioLogado"
//import Familia from "./components/relacao/Familia"
//import Membro from "./components/relacao/Membro"
//import Parimpar from "./components/Parimpar"
//import Diferenciar from "./components/contador/Diferenciar"
//import ContadorV2 from "./components/contador/ContadorV2";
//import Pai from "./components/indireta/pai";
//import Pai from "./components/direta/Pai"
//import Contador from "./components/Contador";
//import Botao from "./components/Botao";
//import Titulo from "./components/Titulo"
//import MinMax from "./components/MinMax";
//import Aleatorio from "./components/aleatorio";
//import CompPadrao, { Comp1, Comp2 } from './components/Multi'
//import Primeiro from './components/Primeiro'

export default () => (
  <SafeAreaView style={style.App}>
    <Mega qtdeNumeros={12} />


      {/*
    <FlexBoxV4 />
    <FlexBoxV3 />
    <FlexBoxV2 />
    <Quadrado cor='#ff801a' />
    <Quadrado cor='#50d1f6' />
    <Quadrado cor='#dd22c1' />
    <Quadrado cor='#8312ed' />
    <Quadrado cor='#36c9a7' />
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <ListaProdutos />
    <ListaProdutos />
    <UsuarioLogado usuario={  {nome: 'João', email: 'joao@j.com' }  } />
    <UsuarioLogado usuario={  {nome: 'Pedro' }  } />
    <UsuarioLogado usuario={  {email: 'joao@j.com' }  } />
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}}   />
    <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Tílapio" sobrenome="Silva" />
      <Membro nome="João" sobrenome="Victor" />
      <Membro nome="Daniela" sobrenome="Antunes" />
    </Familia>
    <Parimpar num={5}/>
    <Diferenciar  />
      <Botao />
      <ContadorV2 />
      <Pai />
      <Pai />
      <Contador inicial={100} passo={13}  />
      <Contador />
      <Titulo principal="Cadastro de Produto" segundario="Tela do cadastro do Produto" />
      {<MinMax min="3" max="20" />
      <MinMax min="1" max="94" />
      <Aleatorio min={1} max={60} />
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro />
      */}
  </SafeAreaView>
)

const style = StyleSheet.create ({
    App: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20
    }
})