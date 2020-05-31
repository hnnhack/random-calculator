import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import ImageComponent from '../components/ImageComponent';

const ThanksPage = () => {
  return (
    <>
      <Link to="/">
        <Button primary animated>
          <Button.Content visible>Back to Default Page</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Link>
      <div className="thanksImage"></div>
      <ImageComponent />
    </>
  );
};

export default ThanksPage;
