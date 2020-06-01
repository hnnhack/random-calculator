import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Input, Grid } from 'semantic-ui-react';
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
  }, [Questions, unsuccessQuestions]);

  if (useRedirect) {
    return <Redirect to="/thanks" />;
  }

  if (unsuccessQuestions.length === 3) {
    console.log(unsuccessQuestions.length);
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
    }
  };

  const onButtonClick = (index) => {
    setRandomQuestions(randomQuestions.filter((elem) => index === elem));
    setActive(true);
  };

  return (
    <>
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
                  {/* <Message error={true} header="Wrong!" content="Wrong answer" /> */}
                </Form.Group>
              </Form>
            )}
          </Grid>
        ))}
    </>
  );
};

export default DefaultPage;
