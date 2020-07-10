const getOption = async () => {

  const url = 'https://dog.ceo/api/breeds/list/all'

  try {
    const response = await axios(url)
    const dogList = Object.keys(response.data.message)
    // console.log(dogList)

const select = document.querySelector('select')


    optionValues(dogList, select)
  
  } catch (error) {
    console.log(`Error: ${error}`)
}


}

getOption()

function optionValues(list, element) {
  list.forEach((dog) => {
    const option = document.createElement('option')
    option.value = `${dog}`
    option.text = `${dog}`
    element.append(option)

  })

}


// Option values 

function value(e) {

  e.preventDefault()
  const optionValue = document.querySelector('#select-dog').value

  console.log(optionValue)
getBreed(optionValue)

}

async function getBreed(breed) {
  const url = `https://dog.ceo/api/breed/${breed}/images/random`
  
  try {
    const response = await axios.get(url)
    console.log(response.data)
    const breedSelected = response.data.message


    removePic()
    dogPic(breedSelected)

  } catch (error) {
    
    console.log(`Error: ${error}`)
    
  }

}

function dogPic(breed) {
  const img = document.createElement('img')
  img.src = breed
  img.style.width = '400px'
  img.style.height = 'auto'
  document.querySelector('#append-dog').append(img)
  
}

function removePic() {

  const oldPic = document.querySelector('#append-dog')
  while (oldPic.lastChild) {
    oldPic.removeChild(oldPic.lastChild)
  }

}


const form = document.querySelector('form')
form.addEventListener('submit', value)


