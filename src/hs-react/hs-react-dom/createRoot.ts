import {MyNode} from "../types/element";
import {renderElement} from "./renderElement";

export let appRoot: AppRoot;

export class AppRoot {

   private nodeFactory?: () => MyNode;
   public firstRender: boolean;

   constructor(private root: HTMLElement) {
      this.firstRender = true;
   }

   render(nodeFactory: () => MyNode) {
      const element = renderElement(nodeFactory());
      this.nodeFactory = nodeFactory
      this.root.appendChild(element);
      this.firstRender = false;
   }

   rerender() {
      if (!this.nodeFactory) return;
      const element = renderElement(this.nodeFactory());
      this.root.innerHTML = '';
      this.root.appendChild(element);
      const input = document.querySelector('input')
      if (!input) return;
      setCaretPosition(input, input.value.length)
      // input.focus()
      // const val = input.value
      // console.log(val)
      // input.value = val

   }
}

function setCaretPosition(ctrl: any, pos: number) {
   if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);
      // IE8 and below
   } else if (ctrl.createTextRange) {
      const range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
   }
}

export const createRoot = (root: HTMLElement): AppRoot => {
   appRoot = new AppRoot(root)
   return appRoot;
}
