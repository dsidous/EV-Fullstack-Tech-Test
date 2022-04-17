import React from 'react';

import Client from '../../atoms/Client';

const ClientList = ({ list }) => (
  <ul>
    {list.map(client => <Client client={client} key={client.id} />)}
  </ul>
);

export default ClientList;