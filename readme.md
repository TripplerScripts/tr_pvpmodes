# client\framework\qb\main.lua: 89~95
## Added onSubmit and onCancel
```lua
RegisterNetEvent("qb-clothes:client:CreateFirstCharacter", function(onSubmit, onCancel)
    QBCore.Functions.GetPlayerData(function(pd)
        PlayerData = pd
        setClientParams()
        InitializeCharacter(Framework.GetGender(true), onSubmit, onCancel)
    end)
end)
```