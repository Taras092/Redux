import React from 'react';
import AvaibleOptions from './AvaibleOptions';
import SelectedOptions from './SelectedOptions';

const TransferList = () => {
  return (
    <div className='transfer-list'>
      <AvaibleOptions title='Available option'/>
      <SelectedOptions title='Selected option'/>
    </div>
  );
}

export default TransferList;