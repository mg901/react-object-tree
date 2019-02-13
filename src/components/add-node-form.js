import React from 'react';
import { createComponent } from 'effector-react';
import { inputText } from '@stores';

export const AddNodeForm = createComponent(
  inputText,
  ({ addNode, children }, text) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.length > 0) {
          addNode(text.trim());
        }
      }}
    >
      {children}
    </form>
  ),
);
