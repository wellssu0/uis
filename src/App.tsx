import React, { FC } from 'react';

import Button, { ButtonType, ButtonSize } from './components/Button/Button';

const App: FC = () => {
  return (
    <div className="App">
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        取消
      </Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Small} href={'google.com'} disabled>
        Google.com
      </Button>
      <header className="App-header">hello world</header>
    </div>
  );
};

export default App;
