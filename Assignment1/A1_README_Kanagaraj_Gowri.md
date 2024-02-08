# Assignment1

* *Date Created*: 07 Feb 2024
* *Last Modification Date*: 08 Feb 2024
* *Git URL*: <https://git.cs.dal.ca/kanagaraj/csci-5709-assignments/-/tree/main/Assignment1>

## Author

* [Gowri Prashanth Kanagaraj](gw351441@dal.ca) - *(Owner)*

## Getting Started

* *Deployment URL*:  <https://65c4ef14e5d8350008b474e5--eclectic-sprite-ce8841.netlify.app/>
* The ticket assignment page has a edit button only when the ticket is unassigned (when system can't automatically assign the ticket).
* Once edited and assigned to the right category and right agent, the sytem will allow to save with validation message success.
* If ticket is tried to save without assigning the right category or agent, the system will not allow to save with validation message error.

## Built With

* [React.js](https://react.dev/) - front-end JavaScript library for building user interfaces
* [Bootstrap](https://www.npmjs.com/package/react-bootstrap) - CSS framework for front-end web development
* [Toastify](https://www.npmjs.com/package/react-toastify) - JavaScript library for creating notifications toasts/messages


## Sources Used

### File Name - Ticket.js

*Lines 30 - 37*

```
toast.success('Ticket successfully assigned!', {
      position: 'top-right',
      autoClose: 3000, 
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

```

The code above was created by adapting the code in [Logrocket](https://blog.logrocket.com/using-react-toastify-style-toast-messages/) as shown below: 

```
toast("This is a custom toast Notification!", {
  position: toast.POSITION.BOTTOM_LEFT,
  className: "toast-message",
});

```

*Lines 39 - 74*

```
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

```

The code above was created by adapting the code in [Logrocket](https://blog.logrocket.com/using-bootstrap-react-tutorial-examples/) as shown below: 

```
return (
    <>
      <div
        className={`text-capitalize h1 mb-4 w-100 text-center text-${themeClass}`}
      >
        {`${theme || "Default"} Theme`}
      </div>
      <div className="btn-group">
        <button className={`text-capitalize btn btn-${themeClass} btn-lg"`} type="button">
          {theme ? theme + " theme" : "Choose Theme"}
        </button>
        <button
          type="button"
          className={`btn btn-lg btn-${themeClass} dropdown-toggle dropdown-toggle-split`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" onClick={() => setTheme("primary")}>
            Primary Theme
          </a>
          <a className="dropdown-item" onClick={() => setTheme("danger")}>
            Danger Theme
          </a>
          <a
            className="dropdown-item" onClick={() => setTheme("success")}>
            Success Theme
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#" onClick={() => resetTheme()}>
            Default Theme
          </a>
        </div>
      </div>
```

## Acknowledgments

* Project logo "Issuestack" create by team memeber - Dhruvik Maheshbhai Kakadiya 
