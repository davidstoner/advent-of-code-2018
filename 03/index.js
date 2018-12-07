const fs = require('fs')
const claims = fs.readFileSync(__dirname + '/input.txt', 'utf8').split('\n')

let claimed = []
let claimedCount = 0

claims.forEach(claim => {
  // example claim
  // #id @ x,y: wxh

  let regex = /^#(\d*) @ (\d*),(\d*): (\d*)x(\d*)$/g
  let matches = regex.exec(claim)
  let id = parseInt(matches[1], 10)
  let x  = parseInt(matches[2], 10)
  let y  = parseInt(matches[3], 10)
  let w  = parseInt(matches[4], 10)
  let h  = parseInt(matches[5], 10)

  // console.log(`#${id} @ ${x},${y}: ${w}x${h}`)
  // console.log(claim)

  for (let i = 0; i < w; i++) {
    let xCord = x + i

    if (claimed.indexOf(`${xCord},${y}`) > 0) {
      claimedCount++
    }

    claimed.push(`${xCord},${y}`)

    for (let j = 0; j < h; j++) {
      let yCord = y + j

      if (j > 0) {
        if (claimed.indexOf(`${xCord},${yCord}`) > 0) {
          claimedCount++
        }

        claimed.push(`${xCord},${yCord}`)
      }
    }
  }
})

console.log(claimedCount)
console.log(claimed.length)