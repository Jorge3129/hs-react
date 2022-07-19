import {convertCamelToDashCase} from "./helpers";
import {HsDOMElement} from "../types/element";

export const renderElement = (node: HsDOMElement): HTMLElement | Text => {
   if (typeof node === "string") {
      return document.createTextNode(node);
   }
   const {type, props} = node;

   if (type === "fragment") {
      return props.children.map((child: any) => renderElement(child))
   }

   const element = document.createElement(type);
   for (const propKey in props) {
      if (propKey === "children") continue;
      if (propKey.startsWith("on")) addListener(element, propKey, props[propKey])
      else if (propKey === "style") addStyle(element, props["style"])
      else if (propKey === "className") element.setAttribute('class', props[propKey])
      else element.setAttribute(propKey, props[propKey]);
   }
   if (props?.children) {
      for (const child of props.children) {
         const renderedChild = renderElement(child);
         if (Array.isArray(renderedChild)) {
            for (const r_child of renderedChild) {
               element.appendChild(r_child)
            }
         } else element.appendChild(renderElement(child));
      }
   }

   return element;
}

const addStyle = (element: HTMLElement, style: { [key: string]: any }) => {
   for (const styleProp in style) {
      const dashedStyleProp = convertCamelToDashCase(styleProp);
      element.style[dashedStyleProp as any] = style[styleProp]
   }
}

const addListener = (element: HTMLElement, event: string, callback: any) => {
   const eventType = event.slice(2).toLowerCase();
   const newEventType = eventType === "change" ? "input" : eventType;
   element.addEventListener(newEventType, (e: any) => {
      callback(e)
   })
}
