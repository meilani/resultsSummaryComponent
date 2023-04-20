getData()

function getData () {
    fetch('../data.json')
    .then(response => response.json())
    .then(data => {
      createCategories(data)
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
}

function createCategories (data) {

    let finalScore = 0
    let scoreSpan = document.querySelector('#final-score')

    for (let i = 0; i < data.length; i++) {
        let item = `#cat-${i+1}`
        let img = document.querySelector(`${item} .img`)
        let name = document.querySelector(`${item} .name`)
        let score = document.querySelector(`${item} .score`)
        let imgData = data[i]["icon"]
        let nameData = data[i]["category"]
        let scoreData = data[i]["score"]

        img.src = imgData 
        name.textContent = nameData 
        score.textContent = scoreData
        finalScore += Number(scoreData)

    }

    finalScore = finalScore / data.length 
    scoreSpan.textContent = Math.round(finalScore)


}