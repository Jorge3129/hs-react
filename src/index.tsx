import HsReactDom from "./hs-react/hs-react-dom";
import HsReact from "./hs-react";
import App from './App'

const root = HsReactDom.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(HsReact.createElement(App, {}) as any);

// type Routes<T extends string> = (...routes: T[]) => T
// type MyRoutes = Routes<"/app" | "/profile">
// type ExtractParam<T> = T extends `/app/chats/:${infer P}` ? P : never
// type Param = ExtractParam<"/app/chats/:chatId">
