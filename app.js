const getOption = async () => {

  const url = 'https://dog.ceo/api/breeds/list/all'

  try {
    const response = await axios(url)
    console.log(response.data.message)
    const dogList = Object.keys(response.data.message)
    console.log(dogList)
  
  } catch (error) {
    console.log(`Error: ${error}`)
}


}

getOption()