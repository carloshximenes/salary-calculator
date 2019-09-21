import React, { useState, useEffect } from 'react';
import './App.css';
import InputText from '../components/InputText/InputText';
import Radium from 'radium';

const listaIRRF = [
  { salMin: 4664.69, tax: 0.2750, deducao: 869.36 },
  { salMin: 3751.06, tax: 0.2250, deducao: 636.13 },
  { salMin: 2826.66, tax: 0.1500, deducao: 354.80 },
  { salMin: 1903.99, tax: 0.0750, deducao: 142.80 },
  { salMin: 0, tax: 0, deducao: 0 }
];

const listaINSS = [
  { salMin: 2919.73, tax: 0.11 },
  { salMin: 1751.82, tax: 0.09 },
  { salMin: 0, tax: 0.08 },
];

function App() {
  const [salarioBruto, setSalarioBruto] = useState(0);
  const [dependentes, setDependentes] = useState(0);
  const [valorINSS, setValorINSS] = useState({ value: 0, tax: 0 });
  const [valorIRRF, setValorIRRF] = useState({ value: 0, tax: 0 });
  const [outrosDescontos, setOutrosDescontos] = useState(0);
  const [salarioLiquido, setSalarioLiquido] = useState(0);

  const style = {
    display: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '300',
    padding: '10%',
    fontSize: '1.4rem',
    letterSpacing: '1px',
    lineHeight: '2',
    textAlign: 'justify',
    fontFamily: 'ProximaNova, Saira Semi Condensed, sans-serif'
  };

  useEffect(() => {
    // Calculo do valor cobrado pelo INSS
    let tetoSalarioBruto = (salarioBruto > 5839.45) ? 5839.45 : salarioBruto;
    let baseINSS = listaINSS.find(base => base.salMin <= tetoSalarioBruto) || 0;
    let calculoINSS = (tetoSalarioBruto * baseINSS.tax);
    setValorINSS({ value: calculoINSS.toFixed(2), tax: baseINSS.tax.toFixed(2) * 100 });

    // Calculo do valor deduzido pelo número de dependentes
    let valorDependentes = dependentes * 189.59;

    let novoSalarioBruto = salarioBruto - calculoINSS - valorDependentes;
    novoSalarioBruto = (novoSalarioBruto < 0) ? 0 : novoSalarioBruto;

    let baseIRRF = listaIRRF.find(base => base.salMin <= novoSalarioBruto);
    let calculoIRRF = (novoSalarioBruto * baseIRRF.tax) - baseIRRF.deducao;
    setValorIRRF({ value: calculoIRRF.toFixed(2), tax: (baseIRRF.tax * 100).toFixed(2) });

    let salarioLiquidoFinal = salarioBruto - calculoINSS - calculoIRRF - outrosDescontos;
    setSalarioLiquido((salarioLiquidoFinal).toFixed(2));

  }, [salarioBruto, dependentes, outrosDescontos]);

  return (
    <div className="App" style={style}>
      <p>Se o seu salário bruto for de R$
        <InputText value={salarioBruto} changed={(event) => setSalarioBruto(event.target.value)} />
        e você possuir
        <InputText width='50px' value={dependentes} changed={(event) => setDependentes(event.target.value)} />
        dependente(s), será descontado um valor de R$
        <InputText editable='readonly' value={valorINSS.value} />
        (<InputText width='40px' editable='readonly' value={valorINSS.tax} />%)
        referente ao INSS e R$
        <InputText editable='readonly' value={valorIRRF.value} />
        (<InputText width='70px' editable='readonly' value={valorIRRF.tax} />%)
        referente ao IRRF. Considerando que você possui outros descontos (plano de saúde, pensão alimentícia, etc) no valor de R$
        <InputText value={outrosDescontos} changed={(event) => setOutrosDescontos(event.target.value)} />, seu salário líquido é de R$
        <InputText editable='readonly' value={salarioLiquido} />
        .</p>
    </div>
  );
}

export default Radium(App);