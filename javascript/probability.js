function probability() {
    let probArray = [];
    const _return = {
        probArray,
        loadSize,
        loadItems,
        selectRandomItem,
        getEmptySlots,
    };

    function getEmptySlots() {
        return this.probArray.filter((_item) => _item.isEmpty).length;
    }

    function loadSize(size = 100) {
        this.probArray = Array(size).fill({ isEmpty: true, data: null });
        return _return;
    }

    function loadItems(item, percentage) {
        const arrLen = this.probArray.length;
        const slotsToFill = (arrLen * percentage) / 100;

        const emptySlots = this.getEmptySlots();
        if (emptySlots >= slotsToFill) {
            for (let index = 0; index < slotsToFill; index++) {
                this.probArray.push({
                    isEmpty: false,
                    data: item,
                });
                this.probArray.shift();
            }
        } else {
            throw new Error(`There are only ${emptySlots} from ${slotsToFill} slots to fill`);
        }

        return _return;
    }

    function selectRandomItem() {
        const emptySlots = this.getEmptySlots();

        // console.log(emptySlots);
        if (emptySlots === 0) {
            const indexToPick = Math.floor(Math.random() * this.probArray.length);
            return this.probArray[indexToPick];
        } else {
            throw new Error(`there are still ${emptySlots} empty slots`);
        }
    }

    return _return;
}

const prob = new probability();
prob.loadSize(100);

// TEST #1
// prob.loadItems(1, 20);
// prob.loadItems(2, 20);
// prob.loadItems(3, 20);
// prob.loadItems(4, 40);

// TEST #2
prob.loadItems('item #1', 1);
prob.loadItems('item #2', 99);

const results = {};
for (let index = 0; index < 1000; index++) {
    const probResult = prob.selectRandomItem();
    if (results[probResult.data]) {
        results[probResult.data] += 1
    } else {
        results[probResult.data] = 1;
    }
}

for (let key in results) {
    results[key] = `${results[key]} times selected`;
}

console.log(JSON.stringify(results, null, '    '));