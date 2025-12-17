fx_version 'cerulean'
game 'gta5'
dependencies {
  'tr_lib',
  'tr_kit',
  'oxmysql',
  --[[ MarDB 8.0.13 ]]
}

author 'Trippler'
version '0.0.0'

client_scripts {
  'build/client.js',
  'build/client.lua',
}
server_scripts {
  'build/server.js',
  'build/server.lua',
}

ui_page 'web/public/index.html'
files {
  'web/public/index.html',
  'build/web.js'
}