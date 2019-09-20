import React, { useState } from 'react';
import './App.css';
import InputText from '../components/InputText/InputText';
import Radium from 'radium';

function App() {
  const [salarioBruto, setSalarioBruto] = useState(0);
  const [dependentes, setDependentes] = useState({ value: 0, discount: 0 });
  const [valorINSS, setValorINSS] = useState({ value: 0, tax: 0 });
  const [valorIRRF, setValorIRRF] = useState({ value: 0, tax: 0 });

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
      <div className="App" style={style}>
        <p>Se o seu salário bruto for de R$
        <InputText value={salarioBruto} changed={(event) => setSalarioBruto(event.value)} />
          e você possuir
        <InputText value={dependentes.value} changed={(event) => setDependentes(event.value)} />
          dependente(s), será descontado o valor de R$
        <InputText editable='readonly' value={dependentes.value} changed={(event) => setDependentes(event.value)} /> (11%)
          referente ao INSS e R$
          122,00 (7%)
          referente ao IRRF. Considerando que você possui outros descontos
          (plano de saúde, pensão alimentícia, etc) no valor de R$
          0,00
          , seu salário líquido será de R$
          3.500,00
        .</p>
      </div>
  );
}

export default Radium(App);