exports('createPlayer', function(delay, data)
    lib.callback.await('qbx_core:server:createCharacter', delay, data)

    TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
    TriggerEvent('QBCore:Client:OnPlayerLoaded')

    return true
end)

exports('charactersData', function()
    local characters, _ = lib.callback.await('qbx_core:server:getCharacters')
    return characters
end)

exports('loadPlayer', function(citizenId)
    local clothes, model = lib.callback.await('qbx_core:server:getPreviewPedData', false, citizenId)
    if not (clothes or model) then return false end

    RequestModel(model)
    while not HasModelLoaded(model) do
        Wait(0)
    end

    SetPlayerModel(PlayerId(), model)
    exports['illenium-appearance']:setPedAppearance(PlayerPedId(), json.decode(clothes))
    SetModelAsNoLongerNeeded(model)

    lib.callback.await('qbx_core:server:loadCharacter', false, exports.tr_spawn.charactersData()[1].citizenid)

    TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
    TriggerEvent('QBCore:Client:OnPlayerLoaded')

    return true
end)