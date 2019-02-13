import React from 'react';
import { createComponent } from 'effector-react';
import { inputText } from '../stores';

export const AddNode = createComponent(inputText, ({ addNode }, text) => (
  <button
    disabled={text.length === 0}
    type="button"
    onClick={() => addNode.prepend(text)}
  >
    add node
  </button>
));
