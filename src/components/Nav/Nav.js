import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export default () => {
  require('./Nav.css');

  return (
    <div className="nav">
      <LinkContainer to="">
        <a className="nav__link" href="">Раздел 1</a>
      </LinkContainer>
      <LinkContainer to="">
        <a className="nav__link" href="">Раздел 2</a>
      </LinkContainer>
      <LinkContainer to="">
        <a className="nav__link" href="">Раздел 3</a>
      </LinkContainer>
      <LinkContainer to="">
        <a className="nav__link" href="">Раздел 4</a>
      </LinkContainer>
    </div>
  );
};
