import React, { useContext } from 'react'
import { AnchorMenuContext } from '../App';

export default function AnchorMenu({title}) {
  const { links } = useContext(AnchorMenuContext);
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {links.map((link) => (<li key={link.id}><a href={link.anchor}>{link.title}</a></li>))}
      </ul>
    </div>
  )
}
