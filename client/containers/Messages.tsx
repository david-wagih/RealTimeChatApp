import { useSockets } from "../context/socket.context";

function MessagesContainer() {
  const { socket, messages, roomId, userName } = useSockets();

  if (!roomId) {
    return <div></div>;
  }
  return (
    <div>
      {messages.map((message, index) => {
        return <p key={index}>{JSON.stringify(message)}</p>;
      })}
    </div>
  );
}

export default MessagesContainer;
