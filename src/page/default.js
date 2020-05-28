import React from 'react';
import { Form, Message, Button } from 'semantic-ui-react';

const DefaultPage = () => {
  return (
    <Form error>
      <Form.Group widths="equal">
        <Form.Input placeholder="Equation" width={8} disabled />
        <Form.Input placeholder="your answer" width={2} />
        <Button>Submit</Button>
      </Form.Group>
      <Message error header="Wrong!" content="You have 2 more try" />{' '}
    </Form>
  );
};

// IMPORT DATA FROM DB

export default DefaultPage;
