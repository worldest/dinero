const React = require("react");
const ReactNativeScript = require("react-nativescript");
const { MainStack } = require("./components/MainStack");

Object.defineProperty(global, '__DEV__', { value: false });

ReactNativeScript.start(React.createElement(MainStack, {}, null));