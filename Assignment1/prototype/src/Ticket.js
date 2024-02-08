import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Ticket = ({ ticket }) => {
  const { id, name, category, asignee } = ticket;
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedAssignee, setSelectedAssignee] = useState(asignee);
  const [isEditing, setIsEditing] = useState(false);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAssigneeChange = (event) => {
    setSelectedAssignee(event.target.value);
  };

  const handleSave = () => {
    
    console.log('Ticket data saved:', {
      id,
      name,
      category: selectedCategory,
      asignee: selectedAssignee,
    });
    setIsEditing(false);

    toast.success('Ticket successfully assigned!', {
      position: 'top-right',
      autoClose: 3000, 
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className="ticket card m-3 p-3"> {}
      <h3 className="mb-3"> {name}</h3>
      <p>Ticket ID: {id}</p>
      {category === 'Unassigned' && asignee === 'none' ? (
        <>
          <p>
            Category:
            {isEditing ? (
              <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="Unassigned">Unassigned</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
              </select>
            ) : (
              selectedCategory
            )}
          </p>
          <p>
            Assignee:
            {isEditing ? (
              <select className="form-select" value={selectedAssignee} onChange={handleAssigneeChange}>
                <option value="none">none</option>
                <option value="Assignee 1">Assignee 1</option>
                <option value="Assignee 2">Assignee 2</option>
              </select>
            ) : (
              selectedAssignee
            )}
          </p>
          {isEditing ? (
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
          ) : (
            <button className="btn btn-secondary" onClick={() => setIsEditing(true)}>Edit</button>
          )}
        </>
      ) : (
        <>
          <p>Category: {category}</p>
          <p>Assignee: {asignee}</p>
        </>
      )}
    </div>
  );
};

export default Ticket;
