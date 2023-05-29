import React, { useContext, useEffect } from 'react'
import { AnchorMenuContext } from '../App';

export default function TextBlock({data}) {
  const { addLink } = useContext(AnchorMenuContext);
  useEffect(() => {
    if (data.isAnchor) addLink({id: data.id, anchor: `#${data.id}`, title: data.title});
  });

  return (
    <div>
      <h2 id={data.id}>{data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
    </div>
  )
}
