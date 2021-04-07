module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'git.eschool.ele',
        nsis:{
          shortcutName:'Eschool 1.30'
        },
        win:{
          target:[
            {
              target: "nsis",
              arch:[
                'x64',
                'ia32'
              ]
            }
          ]
        }
        // options placed here will be merged with default configuration and passed to electron-builder
      }
    }
  }
}