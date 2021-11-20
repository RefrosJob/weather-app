import React from 'react';

import { AppPage } from './components/AppPage/AppPage';
import { AppHeader } from './components/AppHeader/AppHeader';
import { Wrapper } from './AppStyle';

function App() {
  return (
    <Wrapper>
        <AppHeader></AppHeader>
        <div className='app-page-body-container'>
          <AppPage></AppPage>
        </div>
    </Wrapper>
  );
}

export default App;
