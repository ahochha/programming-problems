function binarySearch(arr: Array<number>, low: number, high: number, target: number, findFirst: boolean): number {
    while(true) {
        if (high < low) {
            return -1;
        }

        let mid: number = low + (high - low) / 2;
        
        if (findFirst) {
            if ((mid == 0 || target > arr[mid - 1]) && arr[mid] == target) {
                return mid;
            }
            if (target > arr[mid]) {
                low = mid + 1;
            }
            else {
                high = mid + 1;
            }
        }
        else {
            if ((mid == arr.length - 1 || target < arr[mid + 1]) && arr[mid] == target) {
                return mid;
            }
            else if (target < arr[mid]) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
    }

    return 0;
}

function getRange(arr: Array<number>, target: number): Array<number> {
    let first: number = binarySearch(arr, 0, arr.length - 1, target, true);
    let last: number = binarySearch(arr, 0, arr.length - 1, target, false);

    return [first, last];
}