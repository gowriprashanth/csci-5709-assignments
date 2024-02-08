import React from 'react';
import Ticket from './Ticket';

const TicketList = ({ tickets }) => {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;