import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/solid';
import React from 'react'
import { Callout } from '@tremor/react';

type Props = {
    message:string;
    warning?:boolean;
};

function CalloutCard({message,warning}:Props) {
  return (
    <div>
      <Callout className='mt-4'
      title={message}
      icon={warning ? ExclamationIcon: CheckCircleIcon}
      // color= {warning ? "rose" : "teal : Red"}
      />
    </div>
  )
}

export default CalloutCard
