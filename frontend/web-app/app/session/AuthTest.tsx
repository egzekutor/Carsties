'use client'

import React, { useState } from 'react'
import { UpdateAuctionTest } from '../actions/auctionAction';
import { Button } from 'flowbite-react';

export default function AuthTest() {

const [loading, setLoeading] = useState(false);
const [result, setResult] = useState<any>();

function doUpdate(){
    setResult(undefined);
    setLoeading(true);
    UpdateAuctionTest()
        .then(res=> setResult(res))
        .finally(() => setLoeading(false))
}

  return (
    <div className='flex items-center gap-4'>
        <Button outline isProcessing={loading} onClick={doUpdate}>
            Test auth
        </Button>
        <div>
            {JSON.stringify(result, null, 2)}
        </div>
    </div>
  )
}
