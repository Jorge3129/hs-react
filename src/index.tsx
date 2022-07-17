import HsReactDom from "./hs-react/hs-react-dom";
import HsReact from "./hs-react";
import App from './App'

const root = HsReactDom.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(HsReact.createElement(App, null) as any);



