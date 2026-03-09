import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import MyList from './pages/MyList';

function App() {
  const [myList, setMyList] = useState(() => {
    const savedList = localStorage.getItem('chillMyList');
    if (savedList) {
      return JSON.parse(savedList);
    } else {
      return []; 
    }
  });

  useEffect(() => {
    localStorage.setItem('chillMyList', JSON.stringify(myList));
  }, [myList]);

  const handleAddToList = (movieData) => {
    const isExist = myList.find((item) => item.title === movieData.title);
    if (!isExist) {
      setMyList([...myList, movieData]);
      alert(`Berhasil menambahkan ${movieData.title} ke Daftar Saya!`);
    } else {
      alert(`${movieData.title} sudah ada di Daftar Saya!`);
    }
  };

  const handleRemoveFromList = (movieTitle) => {
    const updatedList = myList.filter((item) => item.title !== movieTitle);
    setMyList(updatedList);
  };

  const handleEditList = (oldTitle, newTitle) => {
    const updatedList = myList.map((item) => {
      if (item.title === oldTitle) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setMyList(updatedList);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home onAdd={handleAddToList} />} />
        <Route path="/mylist" element={<MyList myList={myList} onRemove={handleRemoveFromList} onEdit={handleEditList} />} />
      </Routes>
    </Router>
  );
}

export default App;