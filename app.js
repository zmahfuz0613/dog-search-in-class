const getOption = async () => {

  const url = 'https://dog.ceo/api/breeds/list/all'

  try {
    const response = await axios(url)
    const dogList = Object.keys(response.data.message)
    console.log(dogList)

const select = document.querySelector('select')


    optionValues(dogList, )
  
  } catch (error) {
    console.log(`Error: ${error}`)
}


}

getOption()

function optionValues(lis, element) {
  dogList.forEach((dog) => {
    const option = document.createElement('option')
    option.value = `${dog}`
    option.text = `${dog}`
    select.append(option)

  })

}