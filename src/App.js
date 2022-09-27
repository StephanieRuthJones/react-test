import { useState, useEffect } from "react";
import "./App.css";
import { Table } from "react-bootstrap";
import TableRow from "./components/TableRow";

const fakeData = [
  { name: "Sakib", age: 25, salary: 10000 },
  { name: "Rakib", age: 26, salary: 20000 },
  { name: "Nakib", age: 27, salary: 30000 },
  { name: "Makib", age: 28, salary: 40000 },
];
function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    setPeople(fakeData);
  }, []);
  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => {
            const { name, age, salary } = person;
            return (
              <TableRow
                key={index}
                index={index}
                name={name}
                age={age}
                salary={salary}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
