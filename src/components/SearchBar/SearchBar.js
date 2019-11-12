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
  // console.log(search);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    startsearch(search);
    setSearch('');
  }


  // // const LoadingSpinner = <CircularProgress />;
  // const LoadingSpinner = ({loading}) => {
  //   if (loading) return <CircularProgress/>
    
  // }



  return (
    <AppBar className='appbar' elevation={0}>
      <form onSubmit = {handleSubmit}>
        <TextField placeholder="What did you eat?" type="search" onChange={handleSearch} value={search} />
        <Button type="submit"> 
          <AddIcon/>
        </Button>
      </form>
    </AppBar>
  )
}