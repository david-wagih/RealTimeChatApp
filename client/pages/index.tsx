import { useSockets } from "../context/socket.context";
import MessagesContainer from "../containers/Messages";
import RoomsContainer from "../containers/Rooms";
import styles from "../styles/Home.module.css";
import { useRef } from "react";

export default function Home() {
  const { socket, userName, setUsername } = useSockets();
  const userNameRef = useRef(null);

  function handleSetUserName() {
    const value = userNameRef.current.value;
    if (!value) {
      return;
    }
    setUsername(value);

    localStorage.setItem("userName", value);
  }

  return (
    <div>
      {!userName && (
        <div className={styles.usernameWrapper}>
          <div className={styles.usernameWrapper}>
            <input placeholder="Username" ref={userNameRef} />
            <button onClick={handleSetUserName}>Start</button>
          </div>
        </div>
      )}

      {userName && (
        <div className={styles.container}>
          <RoomsContainer />
          <MessagesContainer />
        </div>
      )}
    </div>
  );
}
