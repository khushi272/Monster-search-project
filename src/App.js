import './App.css';
import { useEffect, useState } from 'react';
import CardList from './componets/card-list/card-list.componets';
import SearchBox from './componets/search-box/search-box.componets';

function App() {
  const [searchField, setSearchfield] = useState('');
  const [monsters, setmonster] = useState([]);
  const [filtermonster ,setfiltermaster] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => setmonster(users)
    );
  }, []);

  console.log(searchField);
  const onSearchstring = (event) => {
    const searchfieldstring = event.target.value.toLocaleLowerCase();
    setSearchfield(searchfieldstring);
  }
  useEffect(()=>{
    const newfilterMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setfiltermaster(newfilterMonster);
  },[monsters,searchField]);
 

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox OnchangeHandler={onSearchstring}
        className='search-box'
        placeholder='search monster'
      />
      <CardList monster={filtermonster} />
    </div>
  )
}
// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       monster : [],
//       searchField : ''
//     };
//   }

//   onSearchstring = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return{searchField};
//     }
//     );
//     }

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users').then((response)=> response.json().then((users)=> this.setState(()=> {
//     return{monster:users}
//   })));
// }
//   render(){
//     const{monster,searchField} = this.state;
//     const{onSearchstring} = this;
//     
//     return(
//     <div className='App'>
//       <h1 className='app-title'>Monster Rolodex</h1>
//       <SearchBox OnchangeHandler={onSearchstring}
//       className='search-box'
//       placeholder='search monster'
//       />
//      <CardList monster={filterMonster} />
//     </div>
//     );


//   }
// }

export default App;
