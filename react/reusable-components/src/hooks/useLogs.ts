import { useState } from "react";
import { createLogEntry, type LogType, type LogEntry } from "../utils/log";

export function useLogs() {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLogEntry = (
    text: string,
    type: LogType = "info",
  ) => {
    setLogs((prev) => [...prev, createLogEntry(text, type)]);
  };

  return {
    logs,
    addLogEntry,
    setLogs,
  };
}