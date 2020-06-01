import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Menu stackable fluid color="blue" id="menu" inverted>
      <Container text>
        <Menu.Item header>
          <Link to="/">LOGO</Link>
        </Menu.Item>
        <Menu.Item header style={{ marginLeft: '5em' }}>
          <Icon name="question" size="large" />
          <Link to="/">DEFAULT</Link>
        </Menu.Item>
        <Menu.Item header style={{ marginLeft: '5em' }}>
          <Icon name="certificate" size="large" />
          <Link to="/thanks">THANK YOU</Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
