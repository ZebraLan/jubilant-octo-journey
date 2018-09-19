var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy == creep.carryCapacity &&
            (!(creep.room.controller instanceof OwnedStructure) ||
                !creep.room.controller.my ||
                creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) &&
            creep.fatigue == 0
        ) {
            creep.say('⚡ upgrade');
            creep.moveTo(
                [
                    creep.room.controller,
                    ..._.values(
                        Game.map.describeExits(creep.room.name)
                    )
                    .filter((name) => name in Game.rooms)
                    .map((name) => Game.rooms[name].controller)
                ].find((controller) => controller instanceof OwnedStructure && controller.my))
        }
        else {
            var sources = [
                creep.room,
                ..._.values(
                    Game.map.describeExits(creep.room.name)
                ).filter((name) => name in Game.rooms).map((name) => Game.rooms[name])
            ].find((room) => (
                (controller) => controller instanceof OwnedStructure && controller.my
            )(room.controller)).find(FIND_SOURCES)
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE &&
                creep.fatigue == 0
            ) {
                creep.say('🔄 harvest');
                creep.moveTo(sources[0]);
            }
        }
    }
}

module.exports = roleUpgrader;
