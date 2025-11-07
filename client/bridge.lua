exports('createPlayer', function(delay, data)
    lib.callback.await('qbx_core:server:createCharacter', delay, data)
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
    
    return true
end)
