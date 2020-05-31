import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Message, Button, Input, Grid } from 'semantic-ui-react';
import Data from '../db.json';

let RANDOM_COUNT = 5;

const DefaultPage = () => {
  const [givenAnswer, setGivenAnswer] = useState('');
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [active, setActive] = useState(false);
  const [unseccussQuestions, setUnsuccessQuestions] = useState([]);

  const { Questions } = Data;

  useEffect(() => {
    const sample = new Set();
    while (sample.size < RANDOM_COUNT) {
      const index = Math.floor(Math.random() * Questions.length);
      sample.add(Questions[index]);
    }
    setRandomQuestions([...sample]);

    // if (unseccussQuestions.length === 3) {
    //   return (RANDOM_COUNT = 0);
    // }
  }, [Questions]);

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.userAnswer.value = '';
    console.log(givenAnswer);
    if (givenAnswer.question.answer === givenAnswer.response) {
      console.log('goto thank you page!');
      setUnsuccessQuestions.length = 0;
      return <Redirect to="/thanks" />;
    } else {
      unseccussQuestions.push(givenAnswer.question);
      console.log(unseccussQuestions + ' wrong!');
    }
  };

  const onButtonClick = (index) => {
    setRandomQuestions(randomQuestions.filter((elem) => index === elem));
    setActive(true);
  };

  return (
    <>
      {randomQuestions &&
        randomQuestions.map((question, index) => (
          <Grid className="segment centered">
            <Button color="blue" key={index} onClick={() => onButtonClick(question)}>
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
                  <Link to="/thanks">
                    <Form.Field
                      control={Button}
                      color="green"
                      icon="check"
                      content="Submit"
                      type="submit"
                    />
                  </Link>
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
