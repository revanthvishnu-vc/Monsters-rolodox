import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import SearchBox from './components/searchBox/searchBox';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=> setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  setFilteredMonsters(newfilteredMonsters);
}, [monsters, searchField]);


   const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    };

    
      

  return(
  <div className='App'>
  <h1 className='app-title'>Monsters rolodox</h1>
  <SearchBox onChangeHandler= {onSearchChange} className='search-box' placeholder='search monsters'/>     
  <CardList monsters={filteredMonsters}/>
</div>
)
}


// class App extends Component{
//  constructor(){
//   super();

//   this.state={
//     monsters:[],
//     searchField: ''
//   }
//  }

//  componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((users)=>
//   this.setState(
//     ()=>{
//       return { monsters: users};
//     }
//   ))
//  }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
  
//   this.setState(() => {
//     return {searchField};
//   })

// };

//  render() { 

//   const { monsters, searchField} = this.state;
//   const {onSearchChange} = this;

//   const filteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLocaleLowerCase().includes(searchField);
//   });

//   return(
//     <div className='App'>
//       <h1 className='app-title'>Monsters rolodox</h1>
//       <SearchBox onChangeHandler= {onSearchChange} className='search-box' placeholder='search monsters'/>     
//       <CardList monsters={filteredMonsters}/>
//     </div>
//   )
//  }
// } 


export default App;
