import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Menu stackable fluid id="menu" inverted>
      <Container text>
        <Menu.Item header>
          <Link to="/">LOGO</Link>
        </Menu.Item>
        <Menu.Item header style={{ marginLeft: '5em' }}>
          <Icon name="home" size="large" />
          <Link to="/">DEFAULT</Link>
        </Menu.Item>
        <Menu.Item header>
          <Icon name="folder" size="large" />
          <Link to="/thanks">THANK YOU</Link>
        </Menu.Item>
      </Container>
      {console.log(window.location.href)}
    </Menu>
  );
};

export default Header;
