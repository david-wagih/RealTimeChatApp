import { nanoid } from "nanoid";
import { Server, Socket } from "socket.io";
import logger from "./utils/logger";

const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_ROOM: "CREATE_ROOM",
  },
  SERVER: {
    ROOMS: "ROOMS",
    JOINED_ROOM: "JOINED_ROOM",
  },
};

const rooms: Record<
  string,
  {
    name: string;
  }
> = {};

function socket({ io }: { io: Server }) {
  logger.info("Sockets Enables");
  io.on(EVENTS.connection, (socket: Socket) => {
    logger.info(`User Connected ${socket.id}`);
    socket.on(EVENTS.CLIENT.CREATE_ROOM, ({ roomName }) => {
      console.log({ roomName });
      const roomId = nanoid();
      rooms[roomId] = {
        name: roomName,
      };
      socket.join(roomId);
      socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);
      socket.emit(EVENTS.SERVER.ROOMS, rooms);
      socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
    });
  });
}

export default socket;
