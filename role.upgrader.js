var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('⚡ upgrade');
        }

        if(creep.memory.upgrading) {
            // creep.moveTo(Game.spawns['Spawn1']);
            // return
            // if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            // if(creep.upgradeController(Game.spawns['Spawn1'].room.controller)
            //     == ERR_NOT_IN_RANGE) {
            //     creep.moveTo(
            //         Game.spawns['Spawn1'].room.controller,
            //         {
            //             visualizePathStyle: {stroke: '#ffffff'},
            //             maxRooms: creep.room === Game.spawns['Spawn1'].room ? 1 : 16
            //         }
            //    );
                // creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleUpgrader;
