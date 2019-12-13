import React, { useState } from 'react';
import './SearchBar.css';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';





export default function Searchbar({startsearch}) {
  const [search, setSearch] = useState('');

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (search === ''){
      alert('PLEASE ENTER A FOOD ITEM')
    } else {
      startsearch(search);
      setSearch('');
    }
  }


  return (
    <AppBar className='appbar' elevation={0}>
      <form onSubmit = {handleSubmit} className = 'form'>
        <TextField placeholder="What did you eat?" type="search" onChange={handleSearch} value={search}  inputProps={{
        style: { textAlign: "center", textTransform: "uppercase"}}} margin='dense' color='secondary'/>
        <Button type="submit"> 
          <AddIcon/>
        </Button>
      </form>
    </AppBar>
  )
}