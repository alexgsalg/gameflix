import React from 'react';

function Sidebar({ genreArray, gameGenre, setGameGenre, setLoadMore }) {

  const handleNumber = (item) => {
    setGameGenre(item);
    setLoadMore(12);
  }

  return (
    <aside className="sidebar">
      <div className="wrapper">

        <div className="sidebox">
          <h3>Categories</h3>
          <nav className="sidebox_list">
            <button className={`sidebox_list__item ${gameGenre === "All" ? "active" : ""}`} onClick={() => { handleNumber("All") }}>All</button>
            {genreArray.map((item) => <button className={`sidebox_list__item ${gameGenre === item ? "active" : ""}`} onClick={() => { handleNumber(item) }} key={item}>{item}</button>)}
          </nav>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
