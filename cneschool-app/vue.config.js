module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    // externals: ['adm-zip']
    electronBuilder: {
      builderOptions: {
        appId: 'git.eschool.ele',
        nsis:{
          shortcutName:'Eschool 1.30'
        },
        mac:{
          target:[
            {
              target: "default"
            }
          ]
        },
        // win:{
        //   target:[
        //     {
        //       target: "nsis",
        //       arch:[
        //         'x64',
        //         'ia32'
        //       ]
        //     }
        //   ]
        // }
        // options placed here will be merged with default configuration and passed to electron-builder
      }
    }
  }
}