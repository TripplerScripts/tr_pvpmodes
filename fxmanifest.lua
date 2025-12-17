fx_version 'cerulean'
game 'gta5'
dependencies {
  'qbx_core',
}

author 'Lenix'
version '2.0.0'

client_scripts {
  '@ox_lib/init.lua',
  'build/client.js',
  'build/client.lua'
}

server_scripts {
  'build/server.js',
}

ui_page 'web/public/index.html'
files {
  'build/web.js',
  'web/**'
}