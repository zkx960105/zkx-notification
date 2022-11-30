<template>
        <div 
        class="zkx-notification" 
        :class="[horizontalClass,verticalProperty]" 
        
        v-show="showClose"
        >
            <div class="zkx-notification__title">
                {{title}}
            </div>
            <div class="zkx-notification__message">
                {{message}}
            </div>
            <div class="zkx-notification-x" @click='handleClose'>
                ×
            </div>
        </div>
</template>
<script>
export default {
    name: 'ZkxNotification'
}
</script>
<script setup>
import { ref, computed } from "vue"

let showClose = ref(true)
let timer = null
const props = defineProps({
    title: String,
    message: String,
    position: String,
    duration: 0,
    // showClose: false,
    // teleport: String
})

const horizontalClass  = computed(() => {
    return props.position? props.position.endsWith('right') ? 'zkx-notification__right':'zkx-notification__left' : "zkx-notification__right"
})

const verticalProperty = computed( () => {
    return props.position? props.position.startsWith('top') ? 'zkx-notification__top':'zkx-notification__bottom' : "zkx-notification__top"
} )

const emit = defineEmits(['update:showClose'])

const handleClose = () => {
    console.log(123)
    clearTimeout(timer)
    // emit('update:showClose',false)
    showClose.value = !showClose.value
}

function delayClose() {
    clearTimeout(timer)
    timer = setTimeout(() => {
        handleClose()
        // emit('update:showClose',false)
        // showClose.value = false
    }, props.duration);
}

delayClose()
</script>
<style lang="scss">
.zkx-notification {  
    position: absolute;  
    // right: 10px;  
    // top: 50px;  
    width: 330px;  
    padding: 14px 26px 14px 13px;  
    border-radius: 8px;  
    border: 1px solid #ebeef5;  
    background-color: #fff;  
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);  
    overflow: hidden;
}
.zkx-notification__right {
    right: 10px;
}
.zkx-notification__bottom {
    bottom: 50px;
}
.zkx-notification-x {
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
}
</style>