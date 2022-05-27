import React from 'react';
import logo from './logo.svg';
import './App.css';

let student: string = 'Kamrul';
let age: number = 69;
let isSmart: boolean = true;

let students: string[] = ['kamrul', 'hasan', 'babu'];

let fees: number[] = [12, 45, 78, 12, 45];

interface Person {
  name: string,
  job?: string,
  employed: string | boolean,
  age: number,
  location?: string | number
}
const person: Person = {
  name: 'Bill',
  employed: true,
  age: 85,
  location: 55

}
/* const person: {name: string, job: string, age: number} = {
  name: 'Bill',
  job: 'jobless',
  age: 85
} */



const handleAddUser = (firstName: string, age: number, address: string):number => {
  const total: number = 50;
  console.log(firstName, age, address);
  return age;
}




function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
