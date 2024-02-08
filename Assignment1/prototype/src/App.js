import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketList from './TicketList';


const tickets = [
  { id: 9873621928, name: 'SAP ERP Instance issue', category: 'SAP', asignee: 'David'},
  { id: 2232342213, name: 'Salesforce - id field alphanumeric update', category: 'Salesforce', asignee: 'John'},
  { id: 9593487989, name: 'Server internal error', category: 'Unassigned', asignee: 'none'}
];

function App() {
  return (
    <div className="App">
      <h1>Ticket Category and Assignment</h1>
      <TicketList tickets={tickets} />
      <ToastContainer />
    </div>
  );
}

export default App;