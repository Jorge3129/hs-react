export interface IComponent {
   name: string,
   state: any[]
   stateIndex: number
   effectDeps: (any[] | undefined)[]
   effectCleanup: (any | undefined)[]
   effectDepsIndex: number
}
