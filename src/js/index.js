const diceButton = document.getElementById("dice-button")
const adviseText = document.querySelector(".advise-text")
const adviseNumber = document.querySelector(".advise-number")
let conter = 0

adviseNumber.innerHTML = "Advise"
adviseText.innerHTML = "Click on the dice to generate a randon advise."

async function adviseApi () {
    const url = "https://api.adviceslip.com/advice"
    const response = fetch(url)
    const json = await (await response).json()
    return json.slip.advice
}

diceButton.addEventListener("click", async (e) => {
    e.preventDefault()
    conter += 1
    let advise = await adviseApi()
    adviseText.innerHTML = advise
    adviseNumber.innerHTML = `Advise #${conter}`
})
