import Notification from './Notification.vue'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import NotificationFunc from './Notification.js'
// import { describe, it } from 'node:test'

describe('Notification', () => {
    it('title', () => {
        const title = 'title'
        const wrapper = mount( Notification, {
            props: {
                title: title
            }
        })
        expect( wrapper.get('.zkx-notification__title').text() ).toContain(title)
    });
    it('message', () => {
        const message = "message"
        const wrapper = mount( Notification, {
            props: {
                message: message
            }
        })
        
        expect( wrapper.get('.zkx-notification__message').text()).toContain(message)
    });
    it('位置', () => {
        const position = "bottom-right"
        const wrapper = mount( Notification, {
            props: {
                position: position
            }
        })
        expect(wrapper.find('.zkx-notification').classes()).toContain('zkx-notification__bottom')
        expect(wrapper.find('.zkx-notification').classes()).toContain('zkx-notification__right')
        
        // expect(wrapper.find('.zkx-notification__bottom').element.style.bottom).toBe('50px')
    });
    it('关闭弹窗', async () => {
        const showClose = true
        const wrapper = mount( Notification, {
            showClose
        })
        await wrapper.find('.zkx-notification-x').trigger('click')
        expect(wrapper.find('.zkx-notification').isVisible()).toBe(false)
    });
    it('延迟关闭', async () => {
        jest.useFakeTimers()

        const duration = 1000
        const wrapper = mount( Notification, {
            props: {
                duration
            }
        })
        jest.runTimersToTime(1000)
        await flushPromises()    
        expect(wrapper.get('.zkx-notification').isVisible()).toBe(false)
    });
    it('使用Notification', () => {
        const instanceProxy = NotificationFunc({message:'message'})

        expect(instanceProxy.props.message).toBe('message')
    })

})