import React, { useState } from 'react';
import { Form, Message, Button, Input, Grid } from 'semantic-ui-react';
import Data from '../db.json';

const DefaultPage = () => {
  const [error, setError] = useState(null);
  const [givenValue, setGivenAnswer] = useState(0);

  console.log(givenValue);

  const { Questions } = Data;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <>
      <Grid className="segment centered">
        {Questions &&
          Questions.map((question) => (
            <Form onSubmit={submitHandler}>
              <Form.Group inline>
                <Form.Field>
                  <label>{question.question}</label>
                  <Input
                    placeholder="your answer"
                    id={question.id}
                    onChange={(event) => setGivenAnswer(event.target.value)}
                  />
                </Form.Field>
                <Button>Submit</Button>
                {/* <Message error header="Wrong!" content="You have 2 more try" />{' '} */}
              </Form.Group>
            </Form>
          ))}
      </Grid>
    </>
  );
};

// IMPORT DATA FROM DB

export default DefaultPage;
