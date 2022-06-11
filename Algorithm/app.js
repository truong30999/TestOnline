const string = "bbbbbbbbbb"
const string2 = "abcabcbb"
const string3 = ""
const string4 = "pwwkew"
const string5 = "abababab"


console.log(findSubString(string5))

function findSubString(string) {
    if (string.length === 0) {
        return 0
    }
    else {
        let result = 0, i = 0, j = 0
        let set = new Set()
        for (i; i < string.length; i++) {
            for (j; j < string.length; j++) {
                if (set.has(string[j])) {
                    set.delete(string[i])
                    break
                } else {
                    set.add(string[j])
                    if (result < (j - i + 1)) {
                        result = j - i + 1
                    }
                }
            }
        }
        return result
    }
}
