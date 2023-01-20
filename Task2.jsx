import React from "react";
import { useState } from "react";

function Task2() {
  const [newId, setNewId] = useState(4);
  const [newName, setNewName] = useState("");
  const [newCatg, setNewCatg] = useState("");
  const [newCost, setNewCost] = useState(0);
	const [editId, setEditId] = useState(null);
	const [obj, setObj] = useState(getInitObj())
  const [initProds, setInitProds] = useState([
    { id: 1, name: "prod1", catg: "catg1", cost: 100 },
    { id: 2, name: "prod2", catg: "catg2", cost: 200 },
    { id: 3, name: "prod3", catg: "catg3", cost: 300 },
  ]);

  const removeElement = (id) => {
    setInitProds(initProds.filter((note) => note.id !== id));
  };


	function getInitObj() {
		return {
			id: newId,
			name: '',
			catg: '',
			cost: 0,
		}
	}
	function getValue(prop) {
		if (editId) {
			return initProds.reduce((res, note) => note.id === editId ? note[prop] : res, '');
		} else {
			return initProds[prop];
		}
	}

	function changeItem(prop, event) {
		if (editId) {
			setInitProds(initProds.map(note => 
				note.id === editId ? {...note, [prop]: event.target.value} : note
			));
		} else {
			setInitProds({...initProds, [prop]: event.target.value});
		}
	}

	function saveItem() {
		if (editId) {
			setEditId(null);
		} else {
			setInitProds([...initProds, obj])
			setObj(getInitObj())
		}
	}

  function addNew() {
    let obj = {
      id: newId,
      name: newName,
      catg: newCatg,
      cost: newCost,
    };
    setInitProds([...initProds, obj]);
    setNewName("");
    setNewCatg("");
    setNewCost(0);
    setNewId(newId + 1);
  }

  const result = initProds.map((note) => {
    return (
      <div>
        <tr key={note.id}>
          <td>{note.name}</td>
          <td>{note.catg}</td>
          <td>{note.cost}</td>
          <td>
            <button onClick={() => removeElement(note.id)}>Remove</button>
          </td>
					<td>
						<button onClick={() => setEditId(note.id)}>edit</button>
					</td>
        </tr>
      </div>
    );
  });
  return (
    <div>
      <table>{result}</table>
      <div>
        <input
          type="text"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <input
          type="text"
          value={newCatg}
          onChange={(event) => setNewCatg(event.target.value)}
        />
        <input
          type="number"
          value={newCost}
          onChange={(event) => setNewCost(event.target.value)}
        />
        <button onClick={() => addNew()}>Add new</button>
      </div>
			<div>
				<input 
					type="text"
					value={getValue('name')}
					onChange={event => changeItem('name', event)}
				/>
				<input
					type="text"
					value={getValue('catg')}
					onChange={event => changeItem('catg', event)}
				 />
				<input
					type="number"
					value={getValue('cost')}
					onChange={event => changeItem('cost', event)}
				/>

				<button onClick={saveItem}>save</button>
			</div>
    </div>
  );
}

export default Task2;
