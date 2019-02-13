import React from 'react';
import 'normalize.css';
import { changeField, addNode, deleteNode } from './events';
import { AddNodeForm, FormInput, AddNode, NodeList } from './components';
import './app.css';

export const App = () => (
  <>
    <AddNodeForm addNode={addNode}>
      <FormInput changeField={changeField} />
      <AddNode addNode={addNode} />
    </AddNodeForm>
    <NodeList deleteNode={deleteNode} />
  </>
);
