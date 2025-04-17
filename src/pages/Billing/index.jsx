import React, { useEffect, useState } from 'react';
import Infos from '../../components/Billing/Infos';
import Method from '../../components/Billing/Method';
import Options from '../../components/Billing/Options';
import Payment from '../../components/Billing/Payment';
import Timeline from '../../components/Billing/Timeline';
import Layout from '../../components/Layout';
import Button from '../../components/general/Button';
import Card from '../../components/general/Card';
import { getBillingSteps } from '../../constants/billingSteps';
import './style.scss';

const Billing = () => {
  const [useDocuments, setUseDocuments] = useState(false);
  const [steps, setSteps] = useState(getBillingSteps(false));

  useEffect(() => {
    setSteps(getBillingSteps(useDocuments));
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

Billing.propTypes = {};

export default Billing;
