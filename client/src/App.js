import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path='/'>
          
        </Route>
        <Route path='/movies/:movieID'>
          
        </Route>
      </Switch>
    </div>
  );
};
export default App;
