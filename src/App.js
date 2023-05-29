import React, { createContext } from 'react'
import AnchorMenu from './components/AnchorMenu';
import Page from './components/Page';

export const AnchorMenuContext = createContext(null);

export default function App() {
  const [links, setLinks] = React.useState([]);
  const showAnchors = true;

  const addLink = (link) => {
    if (links.filter(e => e.id === link.id).length > 0) return;
    setLinks([link, ...links]);
  }

  return (
    <div className="container">
      <h1>Anchor links demo</h1>

      
      <AnchorMenuContext.Provider value={{links: links, addLink: addLink}}>
        <div className="flex">
          {showAnchors && links.length > 0 && 
            <div className="w-1/6">
              <AnchorMenu title="QuickLinks" links={links} />
            </div>}
          <div className="w-5/6">
            <Page />
          </div>
        </div>

      </AnchorMenuContext.Provider>
    </div>
  );
}
