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
      const element = renderElement(renderNode(rootNode, []) as any)
      this.root.appendChild(element);
      this.firstRender = false;
      console.log(compTree.current)
   }

   rerender() {
      compTree.old = JSON.parse(JSON.stringify(compTree.current))
      compTree.current = {}
      if (!this.rootNode) return;
      const node = renderNode(this.rootNode, []);
      // console.log(node)
      const element = renderElement(node as any);
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
   // window.addEventListener('popstate', (e: any) => {
   //    console.log(e.path[0].location.pathname)
   // })
   return appRoot;
}
