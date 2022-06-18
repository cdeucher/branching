import * as React from "react";

interface LoggingProps {
  mountedLogMessage?: string;
}

function withLogging<TProps>(WrappedComponent: React.ComponentType<TProps>) {
  const logger = {
    info(...args:any[]) {
      console.log("[INFO]", ...args);
    }
  };
  return class extends React.Component<TProps & LoggingProps> {
    componentDidMount() {
      logger.info(
        this.props.mountedLogMessage || "component mounted",
        WrappedComponent
      );
    }

    render() {
      logger.info("component rendered", WrappedComponent);

      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withLogging;
