var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy == creep.carryCapacity &&
            creep.room.controller instanceof OwnedStructure &&
            creep.room.controller.my &&
            creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE  &&
            creep.fatigue == 0
        ) {
            creep.say('⚡ upgrade');
            creep.moveByPath(
                PathFinder.search(
                    creep.pos,
                    {pos: creep.room.controller.pos, range: 1},
                    {maxRooms: 1}))
                // creep.room.findPath(
                //     creep.pos,
                //     creep.room.controller.pos))
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE &&
                creep.fatigue == 0
            ) {
                creep.say('🔄 harvest');
                creep.moveByPath(
                    PathFinder.search(
                        creep.pos,
                        {pos: sources[0].pos, range: 1},
                        {maxRooms: 1}))
                    // creep.room.findPath(
                    //     creep.pos,
                    //     sources[0].pos))
                // creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
}




//         if(creep.memory.upgrading && creep.carry.energy == 0) {
//             creep.memory.upgrading = false;
//             creep.say('🔄 harvest');
//         }
//         if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
//             creep.memory.upgrading = true;
//             creep.say('⚡ upgrade');
//         }
// 
//         if(creep.memory.upgrading) {
//             // creep.moveTo(Game.spawns['Spawn1']);
//             // return
//             // if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
//             if(creep.upgradeController(Game.spawns['Spawn1'].room.controller)
//                 == ERR_NOT_IN_RANGE && creep.room === Game.spawns['Spawn1'].room) {
//                 creep.moveTo(
//                     Game.spawns['Spawn1'].room.controller,
//                     {
//                         visualizePathStyle: {stroke: '#ffffff'},
//                         maxRooms: creep.room === 1
//                     }
//                );
//                 // creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
//             }
//         }
//         else {
//             var sources = creep.room.find(FIND_SOURCES);
//             if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//                 creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
//             }
//         }
//     }
// };

module.exports = roleUpgrader;
