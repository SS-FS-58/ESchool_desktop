import {ipcRenderer} from 'electron'

export const plugin = (store) => {
    ipcRenderer.send('vuex-state', store.state)

    store.subscribe((mutation, state) => {
        console.log('Plugin hit')
        ipcRenderer.send('vuex-state', state)
    })
}