const getOption = async () => {

  const url = 'https://dog.ceo/api/breeds/list/all'

  try {
    const response = await axios(url)
    const dogList = Object.keys(response.data.message)
    console.log(dogList)

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