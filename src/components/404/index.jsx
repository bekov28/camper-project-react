import React from 'react'
import notfound from "../../assets/not-found.png";
import { NotFound } from '../styles/style';

const NotFoundComponent = () => {
  return (
    <div>
      <NotFound src={notfound}/>;
    </div>
  )
}

export default NotFoundComponent;