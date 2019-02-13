import React from 'react';
import { createComponent } from 'effector-react';
import { nodes } from '@stores';
import { Node } from './node';

export const NodeList = createComponent(nodes, ({ deleteNode }, list) => (
  <ul>
    {list.map(({ id, text }) => (
      <Node deleteNode={deleteNode} description={text} id={id} key={id} />
    ))}
  </ul>
));
