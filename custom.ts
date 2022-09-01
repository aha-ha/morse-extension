let decoded: string[] = []
let encoded: string[] = []
let index: number = 0
let toreturn: string = ""
let inputm: string = ""
let toreturnd: string = ""
let splitted: string[] = []
let indexd: number = 0
let sp: string[] = []
encoded = [
    ".-",
    ".-.-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    "---.",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "..--",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
    ".----",
    "..---",
    "...--",
    "....-",
    ".....",
    "-....",
    "--...",
    "---..",
    "----.",
    "-----",
    "/"
]
decoded = [
    "a",
    "ä",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "ö",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "ü",
    "v",
    "w",
    "x",
    "z",
    "y",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    " "
]
//decode, encode, playmessage, blinkmessage
/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Weitere Informationen unter https://makecode.microbit.org/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#000000 icon="\uf27a"
namespace morsecode {
    /**
     * Encodes a Text-Message to Morse-Code
     * @param m Text to encode
     */
    //% block="Encode $m"
    export function encode(m: string): string {
        if (m != "") {
            inputm = m.toLowerCase()
            toreturn = ""
            for (let i = 0; i < inputm.length; i++) {
                if (decoded.indexOf(inputm.charAt(i)) != -1) {
                    index = decoded.indexOf(inputm.charAt(i))
                    toreturn = toreturn + encoded.get(index) + " "
                }
            }
        }
        return toreturn
    }
    /**
    * Decodes Morse-Code to a Text-Message
    * @param t Morsecode to decode
    */
    //% block="Decode $t"
    export function decode(t: string): string {
        if (t != "") {
            toreturnd = ""
            splitted = t.split(" ")
            for (let id = 0; id < splitted.length; id++) {
                if (encoded.indexOf(splitted[id]) != -1) {
                    indexd = encoded.indexOf(splitted[id])
                    toreturnd = toreturnd + decoded.get(indexd)
                }
            }
        }
        return toreturnd
    }

    /**
     * Plays a String of Morse-Code
     * @param val Morse-Code
     */
    //% block="Play Sound $val"
    export function playsound(val: string): void {
        if (val != "") {
            if (decoded.indexOf(val.toLowerCase().charAt(0)) != -1) {
                //its plaintext
            }else{
                if (encoded.indexOf(val.split(" ")[0]) != -1){
                    //its morsecode
                    for (let ind = 0; ind < val.length; ind++) {
                        if (val.charAt(ind) == ".") {
                            music.playTone(784, music.beat(BeatFraction.Half))
                        }
                        if (val.charAt(ind) == "-") {
                            music.playTone(494, music.beat(BeatFraction.Whole))
                        }
                        if (val.charAt(ind) == " ") {
                            basic.pause(500)
                        }
                        basic.pause(250)
                    }
                }else{
                    //no valid text or morsecode
                }
            }
        }
    }
    /**
     * Plays a String of Morse-Code
     * @param val Morse-Code
     */
    //% block="Blink $morse"
    export function blink(morse: string): void {
        if (morse != "") {
            if (decoded.indexOf(morse.toLowerCase().charAt(0)) != -1) {
                //its plaintext
            } else {
                if (encoded.indexOf(morse.split(" ")[0]) != -1) {
                    //its morsecode
                    for (let ind = 0; ind < morse.length; ind++) {
                        if (morse.charAt(ind) == ".") {
                            basic.showLeds(`
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                `)
                            music.rest(music.beat(BeatFraction.Quarter))
                            basic.clearScreen()
                        }
                        if (morse.charAt(ind) == "-") {
                            basic.showLeds(`
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                `)
                            music.rest(music.beat(BeatFraction.Whole))
                            basic.clearScreen()
                        }
                        if (morse.charAt(ind) == " ") {
                            basic.pause(500)
                        }
                        basic.pause(250)
                    }
                } else {
                    //no valid text or morsecode
                }
            }
        }
    }
}
