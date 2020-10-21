import React, { FC } from 'react';

import Button, { ButtonType, ButtonSize } from './components/Button/Button';

import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'

const App: FC = () => {
  const menuData = [
    {
      label:'时间',
      children:[
        {
          label:'TODO'
        },
        {
          label:'习惯'
        },
        {
          label:'OKR'
        }
      ]
    },
    {
      label:'账单'
    }
  ]
  return (
    <div className="App">
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        取消
      </Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Small} href={'google.com'} disabled>
        Google.com
      </Button>
      <Menu currentIndex={0}>
      {
        menuData.map((item,index) => {
          return <MenuItem index={index} key={index}>{item.label}</MenuItem>
        })
      }
      </Menu>
      {/* <Menu currentIndex={0}>
        <MenuItem className={'item'} index={0}>haha</MenuItem>
        <MenuItem className={'item'} index={1}>haha</MenuItem>
        <MenuItem className={'item'} index={2}>haha</MenuItem>
      </Menu> */}
      <header className="App-header">hello world</header>
    </div>
  );
};

export default App;