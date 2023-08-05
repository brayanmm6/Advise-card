{
const diceButton = document.getElementById("dice-button")
const adviseText = document.querySelector(".advise-text")
const adviseNumber = document.querySelector(".advise-number")
const asideLeftContent = document.querySelector(".aside-left-content")
let previosAdvise = []
let conter = 0
let adviseConter = 0

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
    let advise = await adviseApi()
    adviseConter = conter + 1
    adviseText.innerHTML = advise
    adviseNumber.innerHTML = `Advise #${adviseConter}`
    previosAdvise.push(advise)
    asideLeftContent.innerHTML += `<p><br>${previosAdvise[conter]}<br></p>`
    conter += 1
})

}

{
    const nighModeInput = document.getElementById("night-mode-button")
    const backgroundArea = document.querySelector("body")
    nighModeInput.addEventListener("click", () => {
        if(nighModeInput.checked){
            backgroundArea.classList.add("night-mode-background")
        }else{
            backgroundArea.classList.remove("night-mode-background")
        }
    })
}

{
    const showAside = document.getElementById("show-aside")
    const eyeIcon= document.querySelector(".eye-icon")
    eyeIcon.classList.add("fas", "fa-eye")
    showAside.addEventListener("click", () => {
        if(showAside.checked != true){
            eyeIcon.classList.remove("fas", "fa-eye")
            eyeIcon.classList.add("fas", "fa-eye-slash")
        }else{
            eyeIcon.classList.remove("fas", "fa-eye-slash")
            eyeIcon.classList.add("fas", "fa-eye")
        }
    })
}