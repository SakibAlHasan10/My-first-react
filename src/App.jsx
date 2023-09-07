import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './assets/todo'
import Actor from './actor'
import Singer from './Singer'
import BookList from './BookList'

function App() {
   const actors = ['amir khan', 'salman khan', 'shakib khan', 'sharukh khan' ]
   const singers = [
      {name : 'arfine shove', age : 45},
      {name : 'habib', age : 40},
      {name : 'asif rahman', age : 55},
      {name : 'neha kakkar', age : 35},
    ]
    const books = [
      {id: 1, name: 'physis', price: 100},
      {id: 2, name: 'biology', price: 120},
      {id: 3, name: 'math', price: 140},
      {id: 4, name: 'chemistry', price: 110},
      {id: 5, name: 'ict', price: 90},
    ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookList books = {books}></BookList>
      { singers.map(singer => <Singer singer={singer}></Singer>)
      }
      {actors.map(actor => <Actor name={actor}></Actor>)}
      <Actor name='Alife'></Actor>

      {/* <Todo task='learn react' isDone={true}></Todo>
      <Todo task='explore react' isDone={false}></Todo>
      <Todo task='try jsx' isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="90000"></Device>
      <Device name="Phone" price="9000"></Device>
      <Device name="watch" price="900"></Device>
      <Person ></Person>
      <Student grade="6" score="99"></Student>
      <Student grade="12" score="80"></Student>
      <Student ></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props){
  return <p>This device: {props.name} Price: {props.price}</p>
}
function Person(){
  const age = 25;
  const money = 40;
  const person = {name : 'sakib', age : 22}
  return <h3 className='student'>I am a {person.name}. i am {age} years old. my money {money}</h3>
}

const {grade, score} = {grade:"6", score:"99"}
function Student({grade=1, score=0}){
  
  return (
    <div className='student'>
      <h3>I am a Student</h3>
      <p>Class : {grade}</p>
      <p>Score : {score}</p>
    </div>
  )
}
function Developer(){
  const developerStyle ={
    border: '3px solid red',
    margin: '20px',
    padding: '25px',
    borderRadius: '30px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>codding</p>
    </div>
  )
}
export default App
