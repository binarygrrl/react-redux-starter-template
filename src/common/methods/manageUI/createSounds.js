let preload

let commonSounds = [
    { src: "alert.mp3", id: 0, name: "alert" },
    { src: "click.mp3", id: 1, name: "click" },
    { src: "stop.mp3", id: 2, name: "stop" },
    { src: "stop2.mp3", id: 3, name: "stop2" },
    { src: "tap.mp3", id: 4, name: "tap" },
    { src: "teaser.mp3", id: 5, name: "teaser" },
    { src: "anticipation1.mp3", id: 6, name: "anticipation1" },
    { src: "anticipation2.mp3", id: 7, name: "anticipation2" },
    { src: "anticipation3.mp3", id: 8, name: "anticipation3" },
    { src: "bonusHit.mp3", id: 9, name: "bonusHit" },
    { src: "linewin.mp3", id: 10, name: "linewin" },
    { src: "win_big_1.mp3", id: 11, name: "win_big_1" },
    { src: "win_final_1.mp3", id: 12, name: "win_final_1" },
    { src: "win_final_2.mp3", id: 13, name: "win_final_2" },
    { src: "win_med_1.mp3", id: 14, name: "win_med_1" },
    { src: "win_med_2.mp3", id: 15, name: "win_med_2" },
    { src: "win_small_1.mp3", id: 16, name: "win_small_1" },
    { src: "win_small_2.mp3", id: 17, name: "win_small_2" },
    { src: "win_small_3.mp3", id: 18, name: "win_small_3" },
    { src: "win_small_4.mp3", id: 19, name: "win_small_4" },
    { src: "win_small_4b.mp3", id: 20, name: "win_small_4b" },
    { src: "wincount.mp3", id: 21, name: "wincount" }
];

function createSounds(cb) {
    if (!createjs.Sound.initializeDefaultPlugins()) {
        document.getElementById('error').style.display = 'block'
        document.getElementById('content').style.display = 'none'
        return
    }


    // examples.showDistractor("content")
    let commonAssetsPath = "../assets/sounds/common/";

    let assetsPath = '../assets/sounds/' + gameTitle + '/'
        // createjs.Sound.alternateExtensions = ['mp3'] // add other extensions to try loading if the src file extension is not supported


    // add an event listener for when load is completed
    createjs.Sound.addEventListener('fileload', createjs.proxy(soundLoaded(cb), this))
    createjs.Sound.registerSounds(commonSounds, commonAssetsPath)
    createjs.Sound.registerSounds(sounds, assetsPath)
}

function soundLoaded(event, cb) {
    // examples.hideDistractor()
    console.log('Sounds loading...')
    if (cb) cb()
}

function stopSound(id, name) {
    console.log(id)
    console.log(name)
        /* if (preload != null) {
            preload.close()
        } */
    let target = getSound(id, name)
    console.log(target)
    let instance = createjs.Sound.stop(target.id)
}


function playSound(target) {
    console.log("playSound")
    console.log(target)
    let common = commonSounds
    console.log(common)
    let snds
    if (sounds.length > 0) {
        snds = sounds
        console.log(snds);
    }
    //if (target.id) {
    // Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
    let instance = createjs.Sound.play(target.id)
    if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
        return
    }
    //}
}

function playSnd(id, name) {
    console.log("playSnd")
    console.log(id)
    console.log(name)

    let target = getSound(id, name)
    console.log("target");
    console.log(target);

    // Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
    let instance = createjs.Sound.play(target.id);
    if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
        return
    }

}

function getSound(id, name) {
    let s = sounds.filter(function(sound) {
        return sound.id == id && sound.name == name
    })
    console.log('s')
    console.log(s)
    if (s.length < 1) {
        let c = commonSounds.filter(function(sound) {
            return sound.id == id && sound.name == name;
        });
        console.log("c");
        console.log(c);
        if (c.length < 1) {
            console.log('Sound not found ' + id + ' ' + name)
        } else {
            return c[0]
        }
    } else {
        return s[0]
    }
}