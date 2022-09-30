const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    query: (sql) => ipcRenderer.invoke("query", sql)
  })