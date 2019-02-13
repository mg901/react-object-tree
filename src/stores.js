import { createStore } from 'effector';
import { v4 } from 'uuid';
import { changeField, addNode, deleteNode } from './events';

export const inputText = createStore('');
export const nodes = createStore([]);

inputText.on(changeField, (state, payload) => payload).reset(addNode);

nodes
  .on(addNode, (state, node) => [
    ...state,
    {
      id: v4(),
      text: node,
      node: [],
    },
  ])
  .on(deleteNode, (state, index) => state.filter((_, i) => i !== index));
