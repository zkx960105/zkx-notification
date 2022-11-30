import { h, render,defineEmits } from 'vue'
import Notification from './Notification.vue'

// const options = {
//     title:'title',
//     message:'message',
//     position:'position',
//     duration: duration,
//     modelValue:'showClose',
//     'onUpdate:modelValue': (value) => emit('update:modelValue', value),
//     teleport='teleport',
// }
const MOUNT_COMPONENT_REF = 'zkx_component'
const COMPONENT_CONTAINER_SYMBOL = Symbol('zkx_component_container')


export default function Notifications(opt) {
    
    const options = Object.assign({},opt)
    const instance = createComponent(options)
    
    document.body.append(instance.vnode.el)
    return instance.propxy
}

function createComponent(options) {
    const vnode = h(Notification,{...options,ref: MOUNT_COMPONENT_REF})
    console.log(vnode)
    const container = document.createElement('div')
    vnode[COMPONENT_CONTAINER_SYMBOL] = container
    render(vnode,container)
    // console.log(vnode)
    return vnode.component
}