import React, { useState } from 'react';
import { Page, Form, Card, PaymentForm } from './components'

const App: React.FC = () => {
  const [name, updateName] = useState('')
  const [number, updateNumber] = useState('')
  const [expiryMonth, updateExpiryMonth] = useState('')
  const [expiryYear, updateExpiryYear] = useState('')
  const [backOfCardActive, setBackOfCardActive] = useState(false)
  const [cvv, updateCVV] = useState('')

  return (
    <Page>
      <PaymentForm>
        <Card 
          name={name}
          number={number}
          date={`${expiryMonth}/${expiryYear}`}
          cvv={cvv}
          backActive={backOfCardActive}
        />

        <Form 
          onNameChange={(value: any) => updateName(value)} 
          onNumberChange={(value: any) => updateNumber(value)}
          onCardBackActivation={(value: boolean) => setBackOfCardActive(value)}
          onExpiryMonthChange={(value: any) => updateExpiryMonth(value)} 
          onExpiryYearChange={(value: any) => updateExpiryYear(value)} 
          onCVVChange={(value: any) => updateCVV(value)} 
        />
      </PaymentForm>
    </Page>
  );
}

export default App;
