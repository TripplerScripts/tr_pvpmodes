fx_version 'cerulean'
game 'gta5'
dependencies {
    'ox_lib',
    'qbx_core',
    'spawnmanager',
    'illenium-appearance'
}

author 'Trippler'
version '1.0.2'

shared_scripts {
    '@ox_lib/init.lua',
}

client_scripts {
    'client/bridge.lua',
    'client/main.js',
}