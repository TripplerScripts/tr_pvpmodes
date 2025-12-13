setImmediate(async () => {
    const checkSessionTick = setTick(async () => {
        if (NetworkIsSessionStarted()) {
            initPlayer()
            clearTick(checkSessionTick)
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
    })
})

async function createPlayer() {
    exports.spawnmanager.spawnPlayer({
        x: 298.5893,
        y: -581.2991,
        z: 43.260,
        heading: 111.2940
    })
    const data = {
        firstname: 'Firstname',
        lastname: 'Lastname',
        nationality: 'Nationality',
        gender: 'Male',
        birthdate: '2025-11-07',
        cid: 1
    }
    const isCreated = await exports.tr_spawn.createPlayer(false, data)
    if (isCreated) {
        emit('qb-clothes:client:CreateFirstCharacter')
    }
}

async function initPlayer() {
    const characters = await exports.tr_spawn.charactersData()
    if (characters.length > 0) {
        const isLoaded = await exports.tr_spawn.loadPlayer(characters[0].citizenid)
        if (isLoaded) {
            exports.spawnmanager.spawnPlayer({
                x: 298.5893,
                y: -581.2991,
                z: 43.260,
                heading: 111.2940
            })
        }
    } else {
        createPlayer()
    }
}