var config = {};

config.lwm2m = {
    logLevel: 'DEBUG',
    port: '5683',
    defaultType: 'SmartSpot',
    ipProtocol: 'udp4',
    serverProtocol: 'udp4',
    delayedObservationTimeout: 2000,
    formats: [
        {
            name: 'application-vnd-oma-lwm2m/tlv',
            value: 11542
        },
        {
            name: 'application-vnd-oma-lwm2m/json',
            value: 11543
        },
        {
            name: 'application-vnd-oma-lwm2m/opaque',
            value: 11544
        }
    ],
    writeFormat: 'application-vnd-oma-lwm2m/opaque',
    types: [
        {
            name: 'SmartSpot',
            url: '/smartspot'
        }
    ]
};

config.ngsi = {
    logLevel: 'DEBUG',
    contextBroker: {
        host: '192.168.1.193',
        port: '1026'
    },
    server: {port: '4042'},
    deviceRegistry: {type: 'mongodb'},
    mongodb: {
        host: '192.168.1.193',
        port: '27016',
        db: 'mongo-iotagent'
    },
    types: {
        'SmartSpot': {
            service: 'SmartSpot',
            subservice: '/smartspot',
            removeSuffix: true,
            commands: [],
            lazy: [
								{
                    name: 'batteryStatus',
                    type: 'Integer'
                },

								{
                    name: 'latitude',
                    type: 'Float'
                },
								{
                    name: 'longitude',
                    type: 'Float'
                },
								{
                    name: 'altitude',
                    type: 'Float'
                },
								{
                    name: 'timestamp',
                    type: 'Time'
                },
								{
                    name: 'speed',
                    type: 'Float'
                },

								{
                    name: 'physicalUrl',
                    type: 'String'
                }
            ],
            active: [

                {
                    name: 'batteryLevel',
                    type: 'Integer'
                },

                {
                    name: 'temperature0',
                    type: 'Float'
                },
                {
                    name: 'temperature1',
                    type: 'Float'
                },

                {
                    name: 'humidity0',
                    type: 'Float'
                },
                {
                    name: 'humidity1',
                    type: 'Float'
                },

                {
                    name: 'NO2',
                    type: 'Float'
                },
                {
                    name: 'SO2',
                    type: 'Float'
                },
                {
                    name: 'O3',
                    type: 'Float'
                },
                {
                    name: 'H2S',
                    type: 'Float'
                },
                {
                    name: 'CO',
                    type: 'Float'
                },

                {
                    name: 'nearDevicesMinute',
                    type: 'Integer'
                },
                {
                    name: 'nearDevicesTenMinutes',
                    type: 'Integer'
                },
                {
                    name: 'nearDevicesHour',
                    type: 'Integer'
                }

            ],
            lwm2mResourceMapping: {

                'batteryStatus': {
                    objectType: 3,
                    objectInstance: 0,
                    objectResource: 20
                },

                'latitude': {
                    objectType: 6,
                    objectInstance: 0,
                    objectResource: 0
                },
                'longitude': {
                    objectType: 6,
                    objectInstance: 0,
                    objectResource: 1
                },
                'altitude': {
                    objectType: 6,
                    objectInstance: 0,
                    objectResource: 2
                },
                'timestamp': {
                    objectType: 6,
                    objectInstance: 0,
                    objectResource: 5
                },
                'speed': {
                    objectType: 6,
                    objectInstance: 0,
                    objectResource: 6
                },

                'physicalUrl': {
                    objectType: 10000,
                    objectInstance: 0,
                    objectResource: 0
                },

                'batteryLevel': {
                    objectType: 3,
                    objectInstance: 0,
                    objectResource: 9
                },

                'temperature0': {
                    objectType: 3303,
                    objectInstance: 0,
                    objectResource: 5700
                },
                'temperature1': {
                    objectType: 3303,
                    objectInstance: 1,
                    objectResource: 5700
                },

                'humidity0': {
                    objectType: 3304,
                    objectInstance: 0,
                    objectResource: 5700
                },
                'humidity1': {
                    objectType: 3304,
                    objectInstance: 1,
                    objectResource: 5700
                },

                'NO2': {
                    objectType: 3300,
                    objectInstance: 0,
                    objectResource: 5700
                },
                'SO2': {
                    objectType: 3300,
                    objectInstance: 1,
                    objectResource: 5700
                },
                'O3': {
                    objectType: 3300,
                    objectInstance: 2,
                    objectResource: 5700
                },
                'H2S': {
                    objectType: 3300,
                    objectInstance: 3,
                    objectResource: 5700
                },
                'CO': {
                    objectType: 3300,
                    objectInstance: 4,
                    objectResource: 5700
                },

                'nearDevicesMinute': {
                    objectType: 10001,
                    objectInstance: 0,
                    objectResource: 1
                },
                'nearDevicesTenMinutes': {
                    objectType: 10001,
                    objectInstance: 0,
                    objectResource: 2
                },
                'nearDevicesHour': {
                    objectType: 10002,
                    objectInstance: 0,
                    objectResource: 3
                }

            }
        }
    },
    service: 'SmartSpot',
    subservice: '/smartspot',
    providerUrl: 'http://192.168.1.193:4042',
    deviceRegistrationDuration: 'P1M'
};

module.exports = config;

