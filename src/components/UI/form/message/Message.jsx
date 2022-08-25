import React from 'react';
import {BiErrorCircle} from 'react-icons/bi';

function Message({content}) {
  return (
    <h3 className='message'>{ content ? '<BiErrorCircle/>' + content : null}</h3>
  )
}

export default Message