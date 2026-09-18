export type LogType = "info" | "success" | "warn" | "error" | "debug";
 

export interface LogEntry {
  text: string;
  type: LogType;
  time: string;
}

export const createLogEntry = (
  text: string,
  type: LogType = "info",
): LogEntry => ({
  text,
  type,
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }),
});

