import logger from "pino";
import dayjs from "dayjs";

// pino-pretty is the alternative for prettyPrint

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
