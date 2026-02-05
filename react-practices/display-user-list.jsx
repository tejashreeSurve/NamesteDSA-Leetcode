import React, { useState, useEffect } from 'react';
import './style.css';

function useUserDataFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return data;
}

export default function App() {
  const [search, setSearch] = useState('');
  const userData = useUserDataFetch();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(userData);
  }, [userData]);

 useEffect(() => {
    let filter = userData.filter((item) =>
      item.username.toLowerCase().includes(search)
    );
    setFilterData(filter);
  }, [search, userData]);

  const handleOnSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
    };
      
    const handleSortAcc = () => {
    const sortedList = [...filterData];
    sortedList.sort((a, b) =>
      a.username.toLowerCase().localeCompare(b.username.toLowerCase())
    );
    setFilterData(sortedList);
    };
      const handleSortDec = () => {
    const sortedList = [...filterData];
    sortedList.sort((a, b) =>
      b.username.toLowerCase().localeCompare(a.username.toLowerCase())
    );
    setFilterData(sortedList);
  };

  return (
    <div>
      <h1>List</h1>
      <div>
        <label
          htmlFor="search"
          style={{ display: 'flex', paddingRight: '3px', gap: '3px' }}
        >
          Search
        </label>
        <input type="text" value={search} onChange={handleOnSearch} />
         <div>
          <button onClick={handleSortAcc}>Sort Ac</button>
          <button onClick={handleSortDec}>Sort Dec</button>
        </div>
      </div>
      {filterData.length ? (
        <ul>
          {filterData.map(({ id, name, username }) => (
            <li key={id}>
              {name} - {username}
            </li>
          ))}
        </ul>
      ) : (
        <span>No data.</span>
      )}
    </div>
  );
}
