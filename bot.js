const Discord = require('discord.js');
const client = new Discord.Client();
var firebase = require('firebase');
var rlrl = [];
var rlcs = [];
var cscs = [];

// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyD4Tag5MZrLJUgwwt6FY2OsGRgYvV7aZnE",
//     authDomain: "crosstrade-a0b8d.firebaseapp.com",
//     databaseURL: "https://crosstrade-a0b8d-default-rtdb.firebaseio.com",
//     projectId: "crosstrade-a0b8d",
//     storageBucket: "crosstrade-a0b8d.appspot.com",
//     messagingSenderId: "106183571870"
// };

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD3zo4cObu6beM_2O8iRY-6K5-RdklOJF8",
    authDomain: "nodebot-c9481.firebaseapp.com",
    databaseURL: "https://nodebot-c9481-default-rtdb.firebaseio.com/",
    projectId: "nodebot-c9481",
    storageBucket: "nodebot-c9481.appspot.com",
    messagingSenderId: "151256295142"
};

firebase.initializeApp(config);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// var timeStamp = new Date().toISOString();
// timeStamp = timeStamp.substring(0,timeStamp.indexOf(".")).replace("T"," ");
// console.log(timeStamp);

client.once('ready', () => {
    console.log('Ready!');
});

client.login('ODA5ODQ5OTEwMTczMTA2MTk4.YCbFgA.QzYqMG9aW8zp-mHdo4gVe4JRjX0');

client.on('message', async message => {
    var tempMessage = message.content.toLowerCase();
    if ((tempMessage.includes("[h]")) && (tempMessage.includes("[w]")) || (tempMessage.includes("(h)")) && (tempMessage.includes("(w)"))) {

        var messages = message.content.toLowerCase().split("\n");
        var messageAuthor = message.author.username + "#" + message.author.discriminator;
        var steamName = "";
        var serverName = message.guild.name;
        var channelName = message.channel.name;

        console.log(message.channel)

        if (serverName == "RLCS.TRADE") {

            if (channelName == "pc_rl_to_rl") {
                var hasGame = "RL";
                var wantGame = "RL";
            }
            if (channelName == "pc_rl_to_cs") {
                var hasGame = "RL";
                var wantGame = "CS";
            }
            if (channelName == "pc_cs_to_cs") {
                var hasGame = "CS";
                var wantGame = "CS";
            }

            var discordURL = "'https://discord.gg/vYyJnSrntZ'";
            var discordServer = "RLCS.TRADE";
            var serverLogo = "/static/rlcsLogo.png"

        };

        if (serverName == "Rocketverse") {

            if (channelName == "😁pc-trading") {
                var hasGame = "RL";
                var wantGame = "RL";
            }

            var discordURL = "'https://discord.gg/QKxsVtNTWZ'";
            var discordServer = "Rocketverse";
            var serverLogo = "/static/rocketverselogo.png"

        };

        if (serverName == "Rocket Traders") {

            if (channelName == "trading-pc") {
                var hasGame = "RL";
                var wantGame = "RL";
            }
            if (channelName == "trading-crossgame") {
                var hasGame = "RL";
                var wantGame = "CS";
            }

            var discordURL = "'https://discord.gg/hn96NMrdQP'";
            var discordServer = "Rocket Traders";
            var serverLogo = "/static/rockettraderslogo.png"

        };

        var i;
        for (i = 0; i < messages.length; i++) {
            if (messages[i].includes("[h]")) {
                try {
                    var currentMessage = messages[i];
                    currentMessage = currentMessage.replace("[h]", "").split("[w]");
                    var haveItem = currentMessage[0].trim();
                    var wantItem = currentMessage[1].trim();
                } catch {
                    //pass
                }
            } else if (messages[i].includes("(h)")) {
                try {
                    var currentMessage = messages[i];
                    currentMessage.replace("(h)", "").split("(w)");
                    var haveItem = currentMessage[0].trim();
                    var wantItem = currentMessage[1].trim();
                } catch {
                    //pass
                }
            } else {
                continue;
            }

            var timeStamp = new Date().toISOString();
            // timeStamp = timeStamp.substring(0, timeStamp.indexOf(".")).replace("T", " ");
            // console.log(timeStamp);

            data = {
                Discord: messageAuthor,
                Has: haveItem,
                Want: wantItem,
                TimeStamp: timeStamp,
                Steam: steamName,
                HasGame: hasGame,
                WantGame: wantGame,
                DiscordURL: discordURL,
                DiscordServer: discordServer,
                ServerLogo: serverLogo,
            };
            // console.log(data);
            // await new Promise(resolve => setTimeout(resolve, 1000));

            if (hasGame == "RL" && wantGame == "RL") {
                // rlrl.push(data);
                var myDataRef = firebase.database().ref('RL-RL');
                myDataRef.push(data);
            }
            if (hasGame == "RL" && wantGame == "CS") {
                // rlcs.push(data);
                var myDataRef = firebase.database().ref('RL-CS');
                myDataRef.push(data);
            }
            if (hasGame == "CS" && wantGame == "CS") {
                // cscs.push(data);
                var myDataRef = firebase.database().ref('CS-CS');
                myDataRef.push(data);
            }
            // console.log(fruits.length);

            // if (rlrl.length == 10) {
            //     var uploadrlrl = rlrl;
            //     rlrl = [];
            //     var j;
            //     for (j = 0; j < uploadrlrl.length; j++) {
            //         var myDataRef = firebase.database().ref('RL-RL');
            //         myDataRef.push(uploadrlrl[j]);
            //         await sleep(500);
            //     }
            // }
            // if (rlcs.length == 10) {
            //     var uploadrlcs = rlcs;
            //     rlcs = [];
            //     var j;
            //     for (j = 0; j < uploadrlcs.length; j++) {
            //         var myDataRef = firebase.database().ref('RL-CS');
            //         myDataRef.push(uploadrlcs[j]);
            //         await sleep(500);
            //     }
            // }
            // if (cscs.length == 10) {
            //     var uploadcscs = cscs;
            //     cscs = [];
            //     var j;
            //     for (j = 0; j < uploadcscs.length; j++) {
            //         var myDataRef = firebase.database().ref('CS-CS');
            //         myDataRef.push(uploadcscs[j]);
            //         await sleep(500);
            //     }
            // }
        }


    }
});
