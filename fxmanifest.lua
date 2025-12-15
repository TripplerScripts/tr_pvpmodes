fx_version 'cerulean'
game 'gta5'
dependencies {
  'qbx_core',
}

author 'Lenix'
version '2.0.0'

client_scripts {
  '@ox_lib/init.lua',
  'backend/build/client.js',
  'backend/build/client.lua'
}

server_scripts {
  'backend/build/server.js',
}

ui_page 'frontend/index.html'
file 'frontend/**'