'use strict';


/**
 * Fetch a list of Attributes
 * Without params, it returns a list of Attributes the user has access to
 *
 * all Boolean Can only be used by admins or managers to fetch all entities (optional)
 * userId Integer Standard users can use this only with their own _userId_ (optional)
 * deviceId Integer Standard users can use this only with _deviceId_s, they have access to (optional)
 * groupId Integer Standard users can use this only with _groupId_s, they have access to (optional)
 * refresh Boolean  (optional)
 * returns List
 **/
exports.attributesComputedGET = function(all,userId,deviceId,groupId,refresh) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "expression" : "expression",
  "description" : "description",
  "id" : 0,
  "attribute" : "attribute",
  "type" : "type"
}, {
  "expression" : "expression",
  "description" : "description",
  "id" : 0,
  "attribute" : "attribute",
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an Attribute
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.attributesComputedIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an Attribute
 *
 * id Integer 
 * body Attribute 
 * returns Attribute
 **/
exports.attributesComputedIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expression" : "expression",
  "description" : "description",
  "id" : 0,
  "attribute" : "attribute",
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create an Attribute
 *
 * body Attribute 
 * returns Attribute
 **/
exports.attributesComputedPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expression" : "expression",
  "description" : "description",
  "id" : 0,
  "attribute" : "attribute",
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Calendars
 * Without params, it returns a list of Calendars the user has access to
 *
 * all Boolean Can only be used by admins or managers to fetch all entities (optional)
 * userId Integer Standard users can use this only with their own _userId_ (optional)
 * returns List
 **/
exports.calendarsGET = function(all,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "data" : "data",
  "name" : "name",
  "attributes" : "{}",
  "id" : 0
}, {
  "data" : "data",
  "name" : "name",
  "attributes" : "{}",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Calendar
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.calendarsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a Calendar
 *
 * id Integer 
 * body Calendar 
 * returns Calendar
 **/
exports.calendarsIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
  "name" : "name",
  "attributes" : "{}",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Calendar
 *
 * body Calendar 
 * returns Calendar
 **/
exports.calendarsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
  "name" : "name",
  "attributes" : "{}",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Saved Commands
 * Without params, it returns a list of Drivers the user has access to
 *
 * all Boolean Can only be used by admins or managers to fetch all entities (optional)
 * userId Integer Standard users can use this only with their own _userId_ (optional)
 * deviceId Integer Standard users can use this only with _deviceId_s, they have access to (optional)
 * groupId Integer Standard users can use this only with _groupId_s, they have access to (optional)
 * refresh Boolean  (optional)
 * returns List
 **/
exports.commandsGET = function(all,userId,deviceId,groupId,refresh) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "attributes" : "{}",
  "id" : 0,
  "type" : "type",
  "deviceId" : 6
}, {
  "description" : "description",
  "attributes" : "{}",
  "id" : 0,
  "type" : "type",
  "deviceId" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Saved Command
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.commandsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a Saved Command
 *
 * id Integer 
 * body Command 
 * returns Command
 **/
exports.commandsIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "description",
  "attributes" : "{}",
  "id" : 0,
  "type" : "type",
  "deviceId" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Saved Command
 *
 * body Command 
 * returns Command
 **/
exports.commandsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "description",
  "attributes" : "{}",
  "id" : 0,
  "type" : "type",
  "deviceId" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Saved Commands supported by Device at the moment
 * Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support
 *
 * deviceId Integer Standard users can use this only with _deviceId_s, they have access to (optional)
 * returns List
 **/
exports.commandsSendGET = function(deviceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "attributes" : "{}",
  "id" : 0,
  "type" : "type",
  "deviceId" : 6
}, {
  "description" : "description",
  "attributes" : "{}",
  "id" : 0,
  "type" : "type",
  "deviceId" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Dispatch commands to device
 * Dispatch a new command or Saved Command if _body.id_ set
 *
 * body Command 
 * returns Command
 **/
exports.commandsSendPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "description",
  "attributes" : "{}",
  "id" : 0,
  "type" : "type",
  "deviceId" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of available Commands for the Device or all possible Commands if Device ommited
 *
 * deviceId Integer Internal device identifier. Only works if device has already reported some locations (optional)
 * protocol String Protocol name. Can be used instead of device id (optional)
 * textChannel Boolean When `true` return SMS commands. If not specified or `false` return data commands (optional)
 * returns List
 **/
exports.commandsTypesGET = function(deviceId,protocol,textChannel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "type" : "type"
}, {
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Devices
 * Without any params, returns a list of the user's devices
 *
 * all Boolean Can only be used by admins or managers to fetch all entities (optional)
 * userId Integer Standard users can use this only with their own _userId_ (optional)
 * id Integer To fetch one or more devices. Multiple params can be passed like `id=31&id=42` (optional)
 * uniqueId String To fetch one or more devices. Multiple params can be passed like `uniqueId=333331&uniqieId=44442` (optional)
 * returns List
 **/
exports.devicesGET = function(all,userId,id,uniqueId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "groupId" : 1,
  "positionId" : 6,
  "phone" : "phone",
  "geofenceIds" : [ 5, 5 ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "contact" : "contact",
  "name" : "name",
  "disabled" : true,
  "model" : "model",
  "attributes" : "{}",
  "id" : 0,
  "category" : "category",
  "uniqueId" : "uniqueId",
  "status" : "status"
}, {
  "groupId" : 1,
  "positionId" : 6,
  "phone" : "phone",
  "geofenceIds" : [ 5, 5 ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "contact" : "contact",
  "name" : "name",
  "disabled" : true,
  "model" : "model",
  "attributes" : "{}",
  "id" : 0,
  "category" : "category",
  "uniqueId" : "uniqueId",
  "status" : "status"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update total distance and hours of the Device
 *
 * id Integer 
 * body DeviceAccumulators 
 * no response value expected for this operation
 **/
exports.devicesIdAccumulatorsPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a Device
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.devicesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a Device
 *
 * id Integer 
 * body Device 
 * returns Device
 **/
exports.devicesIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "groupId" : 1,
  "positionId" : 6,
  "phone" : "phone",
  "geofenceIds" : [ 5, 5 ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "contact" : "contact",
  "name" : "name",
  "disabled" : true,
  "model" : "model",
  "attributes" : "{}",
  "id" : 0,
  "category" : "category",
  "uniqueId" : "uniqueId",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Device
 *
 * body Device 
 * returns Device
 **/
exports.devicesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "groupId" : 1,
  "positionId" : 6,
  "phone" : "phone",
  "geofenceIds" : [ 5, 5 ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "contact" : "contact",
  "name" : "name",
  "disabled" : true,
  "model" : "model",
  "attributes" : "{}",
  "id" : 0,
  "category" : "category",
  "uniqueId" : "uniqueId",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Drivers
 * Without params, it returns a list of Drivers the user has access to
 *
 * all Boolean Can only be used by admins or managers to fetch all entities (optional)
 * userId Integer Standard users can use this only with their own _userId_ (optional)
 * deviceId Integer Standard users can use this only with _deviceId_s, they have access to (optional)
 * groupId Integer Standard users can use this only with _groupId_s, they have access to (optional)
 * refresh Boolean  (optional)
 * returns List
 **/
exports.driversGET = function(all,userId,deviceId,groupId,refresh) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "attributes" : "{}",
  "id" : 0,
  "uniqueId" : "uniqueId"
}, {
  "name" : "name",
  "attributes" : "{}",
  "id" : 0,
  "uniqueId" : "uniqueId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Driver
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.driversIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a Driver
 *
 * id Integer 
 * body Driver 
 * returns Driver
 **/
exports.driversIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "attributes" : "{}",
  "id" : 0,
  "uniqueId" : "uniqueId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Driver
 *
 * body Driver 
 * returns Driver
 **/
exports.driversPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "attributes" : "{}",
  "id" : 0,
  "uniqueId" : "uniqueId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Integer 
 * returns Event
 **/
exports.eventsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "maintenanceId" : 5,
  "positionId" : 1,
  "serverTime" : "2000-01-23T04:56:07.000+00:00",
  "attributes" : "{}",
  "id" : 0,
  "geofenceId" : 5,
  "type" : "type",
  "deviceId" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Geofences
 * Without params, it returns a list of Geofences the user has access to
 *
 * all Boolean Can only be used by admins or managers to fetch all entities (optional)
 * userId Integer Standard users can use this only with their own _userId_ (optional)
 * deviceId Integer Standard users can use this only with _deviceId_s, they have access to (optional)
 * groupId Integer Standard users can use this only with _groupId_s, they have access to (optional)
 * refresh Boolean  (optional)
 * returns List
 **/
exports.geofencesGET = function(all,userId,deviceId,groupId,refresh) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "area" : "area",
  "calendarId" : 6,
  "name" : "name",
  "description" : "description",
  "attributes" : "{}",
  "id" : 0
}, {
  "area" : "area",
  "calendarId" : 6,
  "name" : "name",
  "description" : "description",
  "attributes" : "{}",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Geofence
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.geofencesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a Geofence
 *
 * id Integer 
 * body Geofence 
 * returns Geofence
 **/
exports.geofencesIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "area" : "area",
  "calendarId" : 6,
  "name" : "name",
  "description" : "description",
  "attributes" : "{}",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Geofence
 *
 * body Geofence 
 * returns Geofence
 **/
exports.geofencesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "area" : "area",
  "calendarId" : 6,
  "name" : "name",
  "description" : "description",
  "attributes" : "{}",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Groups
 * Without any params, returns a list of the Groups the user belongs to
 *
 * all Boolean Can only be used by admins or managers to fetch all entities (optional)
 * userId Integer Standard users can use this only with their own _userId_ (optional)
 * returns List
 **/
exports.groupsGET = function(all,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "groupId" : 6,
  "name" : "name",
  "attributes" : "{}",
  "id" : 0
}, {
  "groupId" : 6,
  "name" : "name",
  "attributes" : "{}",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Group
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.groupsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a Group
 *
 * id Integer 
 * body Group 
 * returns Group
 **/
exports.groupsIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "groupId" : 6,
  "name" : "name",
  "attributes" : "{}",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Group
 *
 * body Group 
 * returns Group
 **/
exports.groupsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "groupId" : 6,
  "name" : "name",
  "attributes" : "{}",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Maintenance
 * Without params, it returns a list of Maintenance the user has access to
 *
 * all Boolean Can only be used by admins or managers to fetch all entities (optional)
 * userId Integer Standard users can use this only with their own _userId_ (optional)
 * deviceId Integer Standard users can use this only with _deviceId_s, they have access to (optional)
 * groupId Integer Standard users can use this only with _groupId_s, they have access to (optional)
 * refresh Boolean  (optional)
 * returns List
 **/
exports.maintenanceGET = function(all,userId,deviceId,groupId,refresh) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "period" : 1.46581298050294517310021547018550336360931396484375,
  "name" : "name",
  "start" : 6.02745618307040320615897144307382404804229736328125,
  "attributes" : "{}",
  "id" : 0,
  "type" : "type"
}, {
  "period" : 1.46581298050294517310021547018550336360931396484375,
  "name" : "name",
  "start" : 6.02745618307040320615897144307382404804229736328125,
  "attributes" : "{}",
  "id" : 0,
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Maintenance
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.maintenanceIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a Maintenance
 *
 * id Integer 
 * body Maintenance 
 * returns Maintenance
 **/
exports.maintenanceIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "period" : 1.46581298050294517310021547018550336360931396484375,
  "name" : "name",
  "start" : 6.02745618307040320615897144307382404804229736328125,
  "attributes" : "{}",
  "id" : 0,
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Maintenance
 *
 * body Maintenance 
 * returns Maintenance
 **/
exports.maintenancePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "period" : 1.46581298050294517310021547018550336360931396484375,
  "name" : "name",
  "start" : 6.02745618307040320615897144307382404804229736328125,
  "attributes" : "{}",
  "id" : 0,
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Notifications
 * Without params, it returns a list of Notifications the user has access to
 *
 * all Boolean Can only be used by admins or managers to fetch all entities (optional)
 * userId Integer Standard users can use this only with their own _userId_ (optional)
 * deviceId Integer Standard users can use this only with _deviceId_s, they have access to (optional)
 * groupId Integer Standard users can use this only with _groupId_s, they have access to (optional)
 * refresh Boolean  (optional)
 * returns List
 **/
exports.notificationsGET = function(all,userId,deviceId,groupId,refresh) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "always" : true,
  "mail" : true,
  "calendarId" : 6,
  "web" : true,
  "sms" : true,
  "attributes" : "{}",
  "id" : 0,
  "type" : "type"
}, {
  "always" : true,
  "mail" : true,
  "calendarId" : 6,
  "web" : true,
  "sms" : true,
  "attributes" : "{}",
  "id" : 0,
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Notification
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.notificationsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a Notification
 *
 * id Integer 
 * body Notification 
 * returns Notification
 **/
exports.notificationsIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "always" : true,
  "mail" : true,
  "calendarId" : 6,
  "web" : true,
  "sms" : true,
  "attributes" : "{}",
  "id" : 0,
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Notification
 *
 * body Notification 
 * returns Notification
 **/
exports.notificationsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "always" : true,
  "mail" : true,
  "calendarId" : 6,
  "web" : true,
  "sms" : true,
  "attributes" : "{}",
  "id" : 0,
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send test notification to current user via Email and SMS
 *
 * no response value expected for this operation
 **/
exports.notificationsTestPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch a list of available Notification types
 *
 * returns List
 **/
exports.notificationsTypesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "type" : "type"
}, {
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unlink an Object from another Object
 *
 * body Permission 
 * no response value expected for this operation
 **/
exports.permissionsDELETE = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Link an Object to another Object
 *
 * body Permission 
 * returns Permission
 **/
exports.permissionsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "attributeId" : 2,
  "calendarId" : 5,
  "driverId" : 7,
  "managedUserId" : 9,
  "groupId" : 1,
  "geofenceId" : 5,
  "userId" : 0,
  "deviceId" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetches a list of Positions
 * Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_
 *
 * deviceId Integer _deviceId_ is optional, but requires the _from_ and _to_ parameters when used (optional)
 * from Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z` (optional)
 * to Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z` (optional)
 * id Integer To fetch one or more positions. Multiple params can be passed like `id=31&id=42` (optional)
 * returns List
 **/
exports.positionsGET = function(deviceId,from,to,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "altitude" : 5.63737665663332876420099637471139430999755859375,
  "address" : "address",
  "latitude" : 1.46581298050294517310021547018550336360931396484375,
  "fixTime" : "2000-01-23T04:56:07.000+00:00",
  "accuracy" : 9.301444243932575517419536481611430644989013671875,
  "deviceTime" : "2000-01-23T04:56:07.000+00:00",
  "deviceId" : 6,
  "speed" : 2.3021358869347654518833223846741020679473876953125,
  "network" : "{}",
  "valid" : true,
  "protocol" : "protocol",
  "outdated" : true,
  "course" : 7.061401241503109105224211816675961017608642578125,
  "serverTime" : "2000-01-23T04:56:07.000+00:00",
  "attributes" : "{}",
  "id" : 0,
  "longitude" : 5.962133916683182377482808078639209270477294921875
}, {
  "altitude" : 5.63737665663332876420099637471139430999755859375,
  "address" : "address",
  "latitude" : 1.46581298050294517310021547018550336360931396484375,
  "fixTime" : "2000-01-23T04:56:07.000+00:00",
  "accuracy" : 9.301444243932575517419536481611430644989013671875,
  "deviceTime" : "2000-01-23T04:56:07.000+00:00",
  "deviceId" : 6,
  "speed" : 2.3021358869347654518833223846741020679473876953125,
  "network" : "{}",
  "valid" : true,
  "protocol" : "protocol",
  "outdated" : true,
  "course" : 7.061401241503109105224211816675961017608642578125,
  "serverTime" : "2000-01-23T04:56:07.000+00:00",
  "attributes" : "{}",
  "id" : 0,
  "longitude" : 5.962133916683182377482808078639209270477294921875
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Events within the time period for the Devices or Groups
 * At least one _deviceId_ or one _groupId_ must be passed
 *
 * from Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * to Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * deviceId List  (optional)
 * groupId List  (optional)
 * type List % can be used to return events of all types (optional)
 * returns List
 **/
exports.reportsEventsGET = function(from,to,deviceId,groupId,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "maintenanceId" : 5,
  "positionId" : 1,
  "serverTime" : "2000-01-23T04:56:07.000+00:00",
  "attributes" : "{}",
  "id" : 0,
  "geofenceId" : 5,
  "type" : "type",
  "deviceId" : 6
}, {
  "maintenanceId" : 5,
  "positionId" : 1,
  "serverTime" : "2000-01-23T04:56:07.000+00:00",
  "attributes" : "{}",
  "id" : 0,
  "geofenceId" : 5,
  "type" : "type",
  "deviceId" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Positions within the time period for the Devices or Groups
 * At least one _deviceId_ or one _groupId_ must be passed
 *
 * from Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * to Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * deviceId List  (optional)
 * groupId List  (optional)
 * returns List
 **/
exports.reportsRouteGET = function(from,to,deviceId,groupId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "altitude" : 5.63737665663332876420099637471139430999755859375,
  "address" : "address",
  "latitude" : 1.46581298050294517310021547018550336360931396484375,
  "fixTime" : "2000-01-23T04:56:07.000+00:00",
  "accuracy" : 9.301444243932575517419536481611430644989013671875,
  "deviceTime" : "2000-01-23T04:56:07.000+00:00",
  "deviceId" : 6,
  "speed" : 2.3021358869347654518833223846741020679473876953125,
  "network" : "{}",
  "valid" : true,
  "protocol" : "protocol",
  "outdated" : true,
  "course" : 7.061401241503109105224211816675961017608642578125,
  "serverTime" : "2000-01-23T04:56:07.000+00:00",
  "attributes" : "{}",
  "id" : 0,
  "longitude" : 5.962133916683182377482808078639209270477294921875
}, {
  "altitude" : 5.63737665663332876420099637471139430999755859375,
  "address" : "address",
  "latitude" : 1.46581298050294517310021547018550336360931396484375,
  "fixTime" : "2000-01-23T04:56:07.000+00:00",
  "accuracy" : 9.301444243932575517419536481611430644989013671875,
  "deviceTime" : "2000-01-23T04:56:07.000+00:00",
  "deviceId" : 6,
  "speed" : 2.3021358869347654518833223846741020679473876953125,
  "network" : "{}",
  "valid" : true,
  "protocol" : "protocol",
  "outdated" : true,
  "course" : 7.061401241503109105224211816675961017608642578125,
  "serverTime" : "2000-01-23T04:56:07.000+00:00",
  "attributes" : "{}",
  "id" : 0,
  "longitude" : 5.962133916683182377482808078639209270477294921875
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of ReportStops within the time period for the Devices or Groups
 * At least one _deviceId_ or one _groupId_ must be passed
 *
 * from Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * to Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * deviceId List  (optional)
 * groupId List  (optional)
 * returns List
 **/
exports.reportsStopsGET = function(from,to,deviceId,groupId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "duration" : 6,
  "address" : "address",
  "engineHours" : 2,
  "spentFuel" : 5.63737665663332876420099637471139430999755859375,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "lon" : 5.962133916683182377482808078639209270477294921875,
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "deviceId" : 0,
  "deviceName" : "deviceName",
  "lat" : 1.46581298050294517310021547018550336360931396484375
}, {
  "duration" : 6,
  "address" : "address",
  "engineHours" : 2,
  "spentFuel" : 5.63737665663332876420099637471139430999755859375,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "lon" : 5.962133916683182377482808078639209270477294921875,
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "deviceId" : 0,
  "deviceName" : "deviceName",
  "lat" : 1.46581298050294517310021547018550336360931396484375
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of ReportSummary within the time period for the Devices or Groups
 * At least one _deviceId_ or one _groupId_ must be passed
 *
 * from Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * to Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * deviceId List  (optional)
 * groupId List  (optional)
 * returns List
 **/
exports.reportsSummaryGET = function(from,to,deviceId,groupId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "engineHours" : 2,
  "distance" : 5.962133916683182377482808078639209270477294921875,
  "spentFuel" : 5.63737665663332876420099637471139430999755859375,
  "averageSpeed" : 1.46581298050294517310021547018550336360931396484375,
  "maxSpeed" : 6.02745618307040320615897144307382404804229736328125,
  "deviceId" : 0,
  "deviceName" : "deviceName"
}, {
  "engineHours" : 2,
  "distance" : 5.962133916683182377482808078639209270477294921875,
  "spentFuel" : 5.63737665663332876420099637471139430999755859375,
  "averageSpeed" : 1.46581298050294517310021547018550336360931396484375,
  "maxSpeed" : 6.02745618307040320615897144307382404804229736328125,
  "deviceId" : 0,
  "deviceName" : "deviceName"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of ReportTrips within the time period for the Devices or Groups
 * At least one _deviceId_ or one _groupId_ must be passed
 *
 * from Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * to Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * deviceId List  (optional)
 * groupId List  (optional)
 * returns List
 **/
exports.reportsTripsGET = function(from,to,deviceId,groupId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "startLat" : 7.061401241503109105224211816675961017608642578125,
  "distance" : 5.962133916683182377482808078639209270477294921875,
  "startAddress" : "startAddress",
  "endLon" : 2.027123023002321833274663731572218239307403564453125,
  "averageSpeed" : 1.46581298050294517310021547018550336360931396484375,
  "maxSpeed" : 6.02745618307040320615897144307382404804229736328125,
  "deviceId" : 0,
  "deviceName" : "deviceName",
  "duration" : 2,
  "endLat" : 3.61607674925191080461672754609026014804840087890625,
  "spentFuel" : 5.63737665663332876420099637471139430999755859375,
  "startLon" : 9.301444243932575517419536481611430644989013671875,
  "driverUniqueId" : 4,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "driverName" : "driverName",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "endAddress" : "endAddress"
}, {
  "startLat" : 7.061401241503109105224211816675961017608642578125,
  "distance" : 5.962133916683182377482808078639209270477294921875,
  "startAddress" : "startAddress",
  "endLon" : 2.027123023002321833274663731572218239307403564453125,
  "averageSpeed" : 1.46581298050294517310021547018550336360931396484375,
  "maxSpeed" : 6.02745618307040320615897144307382404804229736328125,
  "deviceId" : 0,
  "deviceName" : "deviceName",
  "duration" : 2,
  "endLat" : 3.61607674925191080461672754609026014804840087890625,
  "spentFuel" : 5.63737665663332876420099637471139430999755859375,
  "startLon" : 9.301444243932575517419536481611430644989013671875,
  "driverUniqueId" : 4,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "driverName" : "driverName",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "endAddress" : "endAddress"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch Server information
 *
 * returns Server
 **/
exports.serverGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deviceReadonly" : true,
  "poiLayer" : "poiLayer",
  "latitude" : 6.02745618307040320615897144307382404804229736328125,
  "zoom" : 5,
  "version" : "version",
  "coordinateFormat" : "coordinateFormat",
  "bingKey" : "bingKey",
  "readonly" : true,
  "limitCommands" : true,
  "twelveHourFormat" : true,
  "mapUrl" : "mapUrl",
  "forceSettings" : true,
  "registration" : true,
  "attributes" : "{}",
  "id" : 0,
  "map" : "map",
  "longitude" : 1.46581298050294517310021547018550336360931396484375
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Server information
 *
 * body Server 
 * returns Server
 **/
exports.serverPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deviceReadonly" : true,
  "poiLayer" : "poiLayer",
  "latitude" : 6.02745618307040320615897144307382404804229736328125,
  "zoom" : 5,
  "version" : "version",
  "coordinateFormat" : "coordinateFormat",
  "bingKey" : "bingKey",
  "readonly" : true,
  "limitCommands" : true,
  "twelveHourFormat" : true,
  "mapUrl" : "mapUrl",
  "forceSettings" : true,
  "registration" : true,
  "attributes" : "{}",
  "id" : 0,
  "map" : "map",
  "longitude" : 1.46581298050294517310021547018550336360931396484375
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Close the Session
 *
 * no response value expected for this operation
 **/
exports.sessionDELETE = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch Session information
 *
 * token String  (optional)
 * returns User
 **/
exports.sessionGET = function(token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deviceReadonly" : true,
  "poiLayer" : "poiLayer",
  "latitude" : 6.02745618307040320615897144307382404804229736328125,
  "zoom" : 5,
  "coordinateFormat" : "coordinateFormat",
  "token" : "token",
  "administrator" : true,
  "password" : "password",
  "readonly" : true,
  "expirationTime" : "2000-01-23T04:56:07.000+00:00",
  "limitCommands" : true,
  "twelveHourFormat" : true,
  "name" : "name",
  "disabled" : true,
  "attributes" : "{}",
  "id" : 0,
  "userLimit" : 2,
  "map" : "map",
  "deviceLimit" : 5,
  "email" : "email",
  "longitude" : 1.46581298050294517310021547018550336360931396484375
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new Session
 *
 * email String 
 * password String 
 * returns User
 **/
exports.sessionPOST = function(email,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deviceReadonly" : true,
  "poiLayer" : "poiLayer",
  "latitude" : 6.02745618307040320615897144307382404804229736328125,
  "zoom" : 5,
  "coordinateFormat" : "coordinateFormat",
  "token" : "token",
  "administrator" : true,
  "password" : "password",
  "readonly" : true,
  "expirationTime" : "2000-01-23T04:56:07.000+00:00",
  "limitCommands" : true,
  "twelveHourFormat" : true,
  "name" : "name",
  "disabled" : true,
  "attributes" : "{}",
  "id" : 0,
  "userLimit" : 2,
  "map" : "map",
  "deviceLimit" : 5,
  "email" : "email",
  "longitude" : 1.46581298050294517310021547018550336360931396484375
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch server Statistics
 *
 * from Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * to Date in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
 * returns List
 **/
exports.statisticsGET = function(from,to) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "captureTime" : "2000-01-23T04:56:07.000+00:00",
  "messagesReceived" : 5,
  "activeUsers" : 0,
  "requests" : 1,
  "activeDevices" : 6,
  "messagesStored" : 5
}, {
  "captureTime" : "2000-01-23T04:56:07.000+00:00",
  "messagesReceived" : 5,
  "activeUsers" : 0,
  "requests" : 1,
  "activeDevices" : 6,
  "messagesStored" : 5
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a list of Users
 *
 * userId String Can only be used by admin or manager users (optional)
 * returns List
 **/
exports.usersGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "deviceReadonly" : true,
  "poiLayer" : "poiLayer",
  "latitude" : 6.02745618307040320615897144307382404804229736328125,
  "zoom" : 5,
  "coordinateFormat" : "coordinateFormat",
  "token" : "token",
  "administrator" : true,
  "password" : "password",
  "readonly" : true,
  "expirationTime" : "2000-01-23T04:56:07.000+00:00",
  "limitCommands" : true,
  "twelveHourFormat" : true,
  "name" : "name",
  "disabled" : true,
  "attributes" : "{}",
  "id" : 0,
  "userLimit" : 2,
  "map" : "map",
  "deviceLimit" : 5,
  "email" : "email",
  "longitude" : 1.46581298050294517310021547018550336360931396484375
}, {
  "deviceReadonly" : true,
  "poiLayer" : "poiLayer",
  "latitude" : 6.02745618307040320615897144307382404804229736328125,
  "zoom" : 5,
  "coordinateFormat" : "coordinateFormat",
  "token" : "token",
  "administrator" : true,
  "password" : "password",
  "readonly" : true,
  "expirationTime" : "2000-01-23T04:56:07.000+00:00",
  "limitCommands" : true,
  "twelveHourFormat" : true,
  "name" : "name",
  "disabled" : true,
  "attributes" : "{}",
  "id" : 0,
  "userLimit" : 2,
  "map" : "map",
  "deviceLimit" : 5,
  "email" : "email",
  "longitude" : 1.46581298050294517310021547018550336360931396484375
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a User
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.usersIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a User
 *
 * id Integer 
 * body User 
 * returns User
 **/
exports.usersIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deviceReadonly" : true,
  "poiLayer" : "poiLayer",
  "latitude" : 6.02745618307040320615897144307382404804229736328125,
  "zoom" : 5,
  "coordinateFormat" : "coordinateFormat",
  "token" : "token",
  "administrator" : true,
  "password" : "password",
  "readonly" : true,
  "expirationTime" : "2000-01-23T04:56:07.000+00:00",
  "limitCommands" : true,
  "twelveHourFormat" : true,
  "name" : "name",
  "disabled" : true,
  "attributes" : "{}",
  "id" : 0,
  "userLimit" : 2,
  "map" : "map",
  "deviceLimit" : 5,
  "email" : "email",
  "longitude" : 1.46581298050294517310021547018550336360931396484375
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a User
 *
 * body User 
 * returns User
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deviceReadonly" : true,
  "poiLayer" : "poiLayer",
  "latitude" : 6.02745618307040320615897144307382404804229736328125,
  "zoom" : 5,
  "coordinateFormat" : "coordinateFormat",
  "token" : "token",
  "administrator" : true,
  "password" : "password",
  "readonly" : true,
  "expirationTime" : "2000-01-23T04:56:07.000+00:00",
  "limitCommands" : true,
  "twelveHourFormat" : true,
  "name" : "name",
  "disabled" : true,
  "attributes" : "{}",
  "id" : 0,
  "userLimit" : 2,
  "map" : "map",
  "deviceLimit" : 5,
  "email" : "email",
  "longitude" : 1.46581298050294517310021547018550336360931396484375
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

