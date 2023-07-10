<<<<<<< HEAD
import { useState, useEffect, useCallback } from "react"
const url = "https://api.github.com/users"

const FetchData = () => {
  const [users, setUsers] = useState([])

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
=======
import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
<<<<<<< HEAD
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
=======
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
