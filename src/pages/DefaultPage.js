import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Input, Grid, Table, Modal } from 'semantic-ui-react';
import Data from '../db.json';

let RANDOM_COUNT = 5;

const DefaultPage = () => {
  const [givenAnswer, setGivenAnswer] = useState({
    question: {
      id: 0,
      question: '',
      answer: '',
    },
    response: '',
  });
  const [modal, setModal] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [active, setActive] = useState(false);
  const [unsuccessQuestions, setUnsuccessQuestions] = useState([]);
  const [useRedirect, setUseRedirect] = useState(false);

  const { Questions } = Data;

  useEffect(() => {
    const sample = new Set();
    while (sample.size < RANDOM_COUNT) {
      const index = Math.floor(Math.random() * Questions.length);
      sample.add(Questions[index]);
    }

    setRandomQuestions([...sample]);

    if (unsuccessQuestions.length === 3) {
      setModal(true);
      unsuccessQuestions.length = 0;
    }
  }, [Questions, unsuccessQuestions.length]);

  if (useRedirect) {
    return <Redirect to="/thanks" />;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.userAnswer.value = '';
    if (givenAnswer.question.answer === givenAnswer.response) {
      unsuccessQuestions.length = 0;
      setUseRedirect(true);
    } else {
      unsuccessQuestions.push(givenAnswer);
      console.log(unsuccessQuestions);
      setActive(false);
      unsuccessQuestions.length <= 2 && setModal(true);
    }
  };

  const onButtonClick = (index) => {
    setRandomQuestions(randomQuestions.filter((elem) => index === elem));
    setActive(true);
  };

  return (
    <>
      {' '}
      <Modal open={modal} dimmer="blurring">
        <Modal.Header>{unsuccessQuestions.length ? 'ERROR' : 'YOU FAILED'}</Modal.Header>
        <Modal.Content>
          {unsuccessQuestions.length ? (
            <p>Wrong Answer! {unsuccessQuestions.length}</p>
          ) : (
            <p>You gave 3 wrong answer. You couldn't pass.</p>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setModal(false)} content="OK" />
        </Modal.Actions>
      </Modal>
      {randomQuestions &&
        randomQuestions.map((question) => (
          <Grid className="segment centered">
            <Button color="blue" key={question.id} onClick={() => onButtonClick(question)}>
              {question.question}
            </Button>
            {active && (
              <Form onSubmit={(event) => submitHandler(event)} size="big">
                <Form.Group inline>
                  <Form.Field>
                    <Input
                      placeholder="your answer"
                      id={question.id}
                      name="userAnswer"
                      onChange={(event) =>
                        setGivenAnswer({
                          question,
                          response: event.target.value,
                        })
                      }
                    />
                  </Form.Field>
                  <Form.Field
                    control={Button}
                    color="green"
                    icon="check"
                    content="Submit"
                    type="submit"
                  />
                </Form.Group>
              </Form>
            )}
          </Grid>
        ))}
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Unsuccess Question</Table.HeaderCell>
            <Table.HeaderCell>Given Wrong Answer</Table.HeaderCell>
            <Table.HeaderCell>Correct Answer</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {unsuccessQuestions &&
            unsuccessQuestions.map((question, index) => (
              <Table.Row>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{question.question.question}</Table.Cell>
                <Table.Cell>{question.response}</Table.Cell>
                <Table.Cell>{question.question.answer}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>{' '}
    </>
  );
};

export default DefaultPage;
