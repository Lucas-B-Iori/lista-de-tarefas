import React, { useState } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';

interface ListItemProps {
    item: Item
}

export default function ListItem({ item }: ListItemProps) {
  
  const [ isChecked, setIsChecked ] = useState(item.done)
  return (
    <C.Container done={isChecked}>
        <input 
          type='checkbox' 
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            item.done = e.target.checked
          }}
        />
        <label htmlFor="">{item.name}</label>
    </C.Container>
  )
}
