let percentages = {}
for(let i = 5; i <= 100; i += 5) {
    percentages[i] = (i / 100).toFixed(2)
}
module.exports = percentages
