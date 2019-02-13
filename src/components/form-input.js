import React from 'react';
import { createComponent } from 'effector-react';
import { inputText } from '../stores';

export const FormInput = createComponent(inputText, ({ changeField }, text) => (
  <input
    type="text"
    value={text}
    onChange={(e) => changeField(e.currentTarget.value)}
  />
));
