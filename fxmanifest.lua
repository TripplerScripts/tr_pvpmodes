fx_version 'cerulean'
game 'gta5'
dependencies {
  'qbx_core',
}

author 'Lenix'
version '2.0.0'

client_scripts {
  'backend/build/client.js',
  'backend/build/client.lua'
}
server_scripts {
  'backend/build/server.js',
  'backend/build/server.lua'
}

ui_page 'frontend/index.html'
files {
  'frontend/index.html',
  'frontend/build/index.js'
}