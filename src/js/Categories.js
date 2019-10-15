export default {
    names: [],
    counters: [],
    grid: [[]],
    create(...names) {
        this.names = names;
        this.counters = new Array(names.length)
    },
    setGrid(grid) {
        this.grid = grid
    },
    resetCounter() {
        this.counters.fill(0)
    },
    countCategory(qNum, aIndex) {
        const cat = this.grid[qNum][aIndex];
        this.counters[cat]++
    },
    getHighest() {
        return this.names[this.counters.indexOf(Math.max(...this.counters))]
    }
}