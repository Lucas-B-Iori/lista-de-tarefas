import React, { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import ListItem from './components/ListItem';
import AddArea from './components/AddArea';

export default function App() {
  const [ list, setList ] = useState<Item[]>([]);

  function handleAddTask(taskName: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  } 

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          <h1>Lista de Tarefas</h1>
        </C.Header>

        <AddArea handleAddTask={handleAddTask}/>

        {list.map(item => (
            <ListItem item={item} key={item.id}/>
          ))}
        
      </C.Area>
    </C.Container>
  )
}
