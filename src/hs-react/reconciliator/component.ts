export interface IComponent {
   name: string,
   state: any[]
   stateIndex: number
   children: IComponent[]
   firstRender?: boolean
   parent?: IComponent
}
