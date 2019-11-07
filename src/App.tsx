import React, { useState } from 'react';
import { Page, Form, Card, PaymentForm } from './components'

const App: React.FC = () => {
  const [name, updateName] = useState('Mr John Doe')
  const [number, updateNumber] = useState('################')
  const [expiryMonth, updateExpiryMonth] = useState('00')
  const [expiryYear, updateExpiryYear] = useState('00')

  return (
    <Page>
      <PaymentForm>
        <Card 
          name={name}
          number={number}
          date={`${expiryMonth}/${expiryYear}`}
        />

        <Form 
          onNameChange={(value: any) => updateName(value)} 
          onNumberChange={(value: any) => updateNumber(value)} 
          onExpiryMonthChange={(value: any) => updateExpiryMonth(value)} 
          onExpiryYearChange={(value: any) => updateExpiryYear(value)} 
        />
      </PaymentForm>
    </Page>
  );
}

export default App;
