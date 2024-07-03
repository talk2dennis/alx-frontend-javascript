/// <reference path="./crud.d.ts" />

import * as crud from './crud.d';

import { RowID, RowElement } from './interface';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = crud.insertRow(row);

const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

crud.updateRow(newRowID, updatedRow);

crud.deleteRow(newRowID);