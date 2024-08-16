import { useState } from 'react';

import Header from './view/shell/component/Header';
import Main from './view/shell/component/Main';
import Footer from './view/shell/component/Footer';

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Header title="InStock"/>
      <Main 
        user={user} 
        setUser={setUser}
      />
      <Footer user={user}/>
    </>
  )
}

export default App
