import './DeprecationMessage.scss';

import React from 'react';

const DeprecationMessage = () => (
  <div className="deprecate">
    <div>
      <p>Tämä on 3. periodilla pidetyn, jo päättyneen kurssin sisältö.</p>
      <p>
        <strong>Jos haluat suorittaa kurssin nyt</strong>, mene osoitteeseen{' '}
        <span className="link">
          <a href="https://fullstackopen-2019.github.io/">
            https://fullstackopen-2019.github.io/
          </a>
        </span>
      </p>
    </div>
  </div>
);

export default DeprecationMessage;
