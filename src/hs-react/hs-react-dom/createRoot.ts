import {HsReactElement, HsReactNode} from "../types/element";
import {renderElement} from "./renderElement";
import {renderNode} from "../reconciliator/renderNode";
import {compTree} from "../reconciliator/comp-tree";

export let appRoot: AppRoot;

export class AppRoot {

   public firstRender: boolean
   private rootNode?: HsReactElement

   constructor(private root: HTMLElement) {
      this.firstRender = true
   }

   render(rootNode: HsReactElement) {
      this.rootNode = rootNode
      const element = renderElement(renderNode(rootNode, []))
      this.root.appendChild(element);
      this.firstRender = false;
   }

   rerender() {
      if (!this.rootNode) return;
      const element = renderElement(renderNode(this.rootNode, []));
      this.root.innerHTML = '';
      this.root.appendChild(element);
      const input = document.querySelector('input')
      if (!input || !input?.value.length) return;
      setCaretPosition(input, input.value.length)
   }
}

function setCaretPosition(ctrl: any, pos: number) {
   if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);
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
