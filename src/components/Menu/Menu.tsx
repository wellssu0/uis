import React, { useState, createContext, FunctionComponentElement, FC } from 'react'
import classnames from 'classnames'
import { MenuItemProps } from './MenuItem'

type MenuDirection = "vertical" | "horizontal"
type SelectCallback = (selectIndex: number) => void

interface MenuProps {
  currentIndex?: number;
  keyName?: string;
  direction?: MenuDirection;
  className?: string;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
  // children?: React.ReactNode
}
interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
  direction?: MenuDirection
}

// create menu context
export const MenuContext = createContext<IMenuContext>({ index: 0})

const Menu: FC<MenuProps> = ({
  currentIndex,
  keyName,
  direction,
  className,
  style,
  onSelect,
  defaultOpenSubMenus,
  children
}) => {
  const [currentActive, setCurrentActive] = useState(currentIndex)

  const classes = classnames(
    'menu', 
    className, 
    direction === 'vertical' ? 'menu-vertical' : 'menu-horizontal')

  const handleClick = (index: number) => {
    setCurrentActive(index)
    if( onSelect ) onSelect(index)
  }

  const passedContext:IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
    direction,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index)=>{
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { name } = childElement.type
      console.log(childElement);
      console.log(name);
      
      if( name === 'MenuItem' || name === 'SubMenu'){
        console.log(React.cloneElement(childElement, { index: index}));
        return React.cloneElement(childElement, { index: index})
      }else{
        console.error('Warning: Menu has a child which is not a MenuItem component')
      }
    })
  }

  return (
    <ul className={ classes } style={ style } >
      <MenuContext.Provider value={ passedContext }>
        { renderChildren() }
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  direction: 'horizontal',
  currentIndex: 0,
}

export default Menu

