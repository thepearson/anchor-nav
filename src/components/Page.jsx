import React, { useState } from 'react'
import data from '../data'
import TextBlock from './TextBlock';

export default function Page() {
  const [blocks] = useState(data);

  return (
    <div>
      {blocks.map((block) => <TextBlock key={block.id} data={block} />)}
    </div>
  )
}
