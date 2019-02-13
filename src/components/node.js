import React from 'react';
import { createComponent } from 'effector-react';
import { nodes } from '../stores';

/* eslint-disable */

export const Node = createComponent(
  nodes,
  ({ deleteNode, id, description }) => (
    <li>
      <div onClick={() => deleteNode(id)} onKeyDown={() => deleteNode(id)}>
        {description}
      </div>
    </li>
  ),
);
