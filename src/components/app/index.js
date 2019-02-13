import React from 'react';
import 'normalize.css';
import { changeField, addNode, deleteNode } from '../../events';
import { AddNodeForm } from '../add-node-form';
import { FormInput } from '../form-input';
import { AddNode } from '../add-node';
import { NodeList } from '../node-list';
import './index.css';

export const App = () => (
  <>
    <AddNodeForm addNode={addNode}>
      <FormInput changeField={changeField} />
      <AddNode addNode={addNode} />
    </AddNodeForm>
    <NodeList deleteNode={deleteNode} />
  </>
);
