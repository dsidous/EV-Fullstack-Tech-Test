import React from 'react';
import moment from 'moment';

import { ListElement } from './styles';

const Client = ({ client }) => (
  <ListElement>
    <span>{client.name}</span>
    <span>{client.email}</span>
    <span>{client.company}</span>
    <span>{moment(client.createdDate).format('Do MMMM, YYYY')}</span>
  </ListElement>
  
);

export default Client;