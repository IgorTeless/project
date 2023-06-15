import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logo from "../../images/logo.svg";
import Loading from "../atoms/Loading";

import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const [users, setUsers] = useState([]);

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setisLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className={`${styles.home} center`}>
      <div class={styles.logo}>
        <img src={logo} className="responsive" alt="" />
      </div>
      <select
        onChange={(event) => setCurrentUser(event.target.value)}
        className={styles.selecUsers}
      >
        <option value="">Selecione um usuário</option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      {!!currentUser && (
        <button
          onClick={() => navigate(`/users/${currentUser}`)}
          className="button-primary"
        >
          Entrar
        </button>
      )}
    </div>
  );
}
