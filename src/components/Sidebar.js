import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="wrapper">

        <div className="sidebox">
          <h3>Categories</h3>
          <nav className="sidebox_list">
            <button className="sidebox_list__item">All</button>
            <button className="sidebox_list__item">Adventure</button>
            <button className="sidebox_list__item">Shooter</button>
            <button className="sidebox_list__item">MMORPG</button>
          </nav>
        </div>



      </div>
    </aside>
  )
}

export default Sidebar
