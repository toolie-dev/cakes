export const requiredField = value => {
    if(value) return undefined

    return 'Field is required'
}

export const maxLenghCreator = maxLengh => value => {
    if(value && value.length <= maxLengh) return undefined

    return `Max lengh is ${maxLengh} sumbols`
}