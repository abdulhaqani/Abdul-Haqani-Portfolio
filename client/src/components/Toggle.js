import React, { Fragment } from 'react';
import '../scss/sidebar.scss';

export const Toggle = (props) => {
  return (
    <Fragment>
      <i className="material-icons toggle-sidebar" onClick={props.click}>
        menu
      </i>
    </Fragment>
  );
};

export default Toggle;
