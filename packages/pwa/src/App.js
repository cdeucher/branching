import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://a08af8486276415cb0d2edb20ee057c7@o1146644.ingest.sentry.io/6215614",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  release: "devops-app-1.0",
  environment: "devops",
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        v0.0.9
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
