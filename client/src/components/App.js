import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from './Header';



export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/> 

      <Routes>
        <Route path="/" exact Component={StreamList}/>
        <Route path="/streams/create" exact Component={StreamCreate}/>
        <Route path="/streams/edit" exact Component={StreamEdit}/>
        <Route path="/streams/delete" exact Component={StreamDelete}/>
        <Route path="/streams/show" exact Component={StreamShow}/>

      </Routes>
      </BrowserRouter>
       </div>
  )
}
export default App;