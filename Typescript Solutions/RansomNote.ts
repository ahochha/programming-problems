interface IHash {
    [key: string]: number;
}

function canConstruct (ransomNote: string, magazine: string) : boolean {
    let mag_dict: IHash = {};

    for(let i = 0; i < magazine.length; i++) {
        if (mag_dict[magazine[i]] == undefined) {
            mag_dict[magazine[i]] = 0;
        }

        mag_dict[magazine[i]] += 1;
    }

    for(let i = 0; i < ransomNote.length; i++) {
        if (mag_dict[ransomNote[i]] == undefined) {
            mag_dict[ransomNote[i]] = 0;
        }

        mag_dict[ransomNote[i]] -= 1;

        if (mag_dict[ransomNote[i]] < 0) {
            return false;
        }
    }

    return true;
}