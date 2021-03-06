import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export default () => {
  const style = require('./Nav.scss');
  const nav__link = style.nav__link + ' text-color';

  return (
    <div className={style.nav}>
      <LinkContainer to="">
        <a className={nav__link} href="">Раздел 1</a>
      </LinkContainer>
      <LinkContainer to="">
        <a className={nav__link} href="">Раздел 2</a>
      </LinkContainer>
      <LinkContainer to="">
        <a className={nav__link} href="">Раздел 3</a>
      </LinkContainer>
      <LinkContainer to="">
        <a className={nav__link} href="">Раздел 4</a>
      </LinkContainer>
    </div>
  );
};
