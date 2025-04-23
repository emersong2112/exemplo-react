import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
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
  const methodsForm = useForm({ mode: 'onChange' });
  const { watch, formState: { isValid } } = methodsForm;

  const useDocuments = watch('useDocuments', false);
  const [steps, setSteps] = useState(getBillingSteps(false));

  useEffect(() => {
    setSteps(getBillingSteps(useDocuments));
  }, [useDocuments]);

  return (
    <Layout backRoute="#" title="Cobrança" id="billing-page">
      <FormProvider {...methodsForm}>
        <Card>
          <Timeline steps={steps} updateLine={useDocuments} />
          <div className="side-by-side">
            <Infos />
            <Options />
          </div>
          <Method />
          <Payment />
          <div className="final">
            <Button disabled={!isValid}>Avançar</Button>
          </div>
        </Card>
      </FormProvider>
    </Layout>
  );
};

Billing.propTypes = {};

export default Billing;
