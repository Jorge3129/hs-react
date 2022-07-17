export const renderElement = (node: any): any => {
   if (typeof node === "string") {
      return document.createTextNode(node);
   }
   const {type, props, children} = node;
   const element = document.createElement(type);
   for (const propKey in props) {
      if (propKey.startsWith("on")) addListener(element, propKey, props[propKey])
      else if (propKey === "style") addStyle(element, props["style"])
      else if (propKey === "className") {
         element.setAttribute('class', props[propKey])
      } else element.setAttribute(propKey, props[propKey]);
   }
   if (children) {
      for (const child of children) {
         element.appendChild(renderElement(child));
      }
   }

   return element;
}

const addStyle = (element: HTMLElement, style: { [key: string]: any }) => {
   for (const styleProp in style) {
      // @ts-ignore
      element.style[styleProp] = style[styleProp]
   }
}

const addListener = (element: HTMLElement, event: string, callback: any) => {
   const eventType = event.slice(2).toLowerCase();
   const newEventType = eventType === "change" ? "input" : eventType;
   element.addEventListener(newEventType, (e: any) => {
      callback(e)
   })
}
