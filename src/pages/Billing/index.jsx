import React, { useEffect, useState } from 'react';
import Infos from '../../components/Billing/Infos';
import Method from '../../components/Billing/Method';
import Options from '../../components/Billing/Options';
import Payment from '../../components/Billing/Payment';
import Timeline from '../../components/Billing/Timeline';
import Layout from '../../components/Layout';
import Button from '../../components/general/Button';
import Card from '../../components/general/Card';
import './style.scss';
const Billing = () => {
  const [useDocuments, setUseDocuments] = useState(false);
  const [steps, setSteps] = useState([
    { label: 'Dados da cobrança' },
    { label: 'Juros e Multa' },
    { label: 'Documentos' },
    { label: 'Dados do cliente' },
    { label: 'Resumo' },
  ]);
  const updateSteps = () => {
    const baseSteps = [
      { label: 'Dados da cobrança' },
      { label: 'Juros e Multa' },
      { label: 'Dados do cliente' },
      { label: 'Resumo' },
    ];

    if (useDocuments) {
      const newSteps = [
        ...baseSteps.slice(0, 2),
        { label: 'Documentos' },
        ...baseSteps.slice(2),
      ];
      setSteps(newSteps);
    } else {
      setSteps(baseSteps);
    }
  };

  useEffect(() => {
    updateSteps();
  }, [useDocuments]);

  return (
    <Layout backRoute="#" title="Cobrança" id="billing-page">
      <Card>
        <Timeline steps={steps} updateLine={useDocuments} />
        <div className="side-by-side">
          <Infos />
          <Options onChangeDocuments={setUseDocuments} />
        </div>
        <Method />
        <Payment />
        <div className="final">
          <Button>Avançar</Button>
        </div>
      </Card>
    </Layout>
  );
};

export default Billing;
