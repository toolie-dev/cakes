export const telephoneNumber = value => {
    console.log(value.length);
    if(value && value.length != value) return `Wrong numbe`;
    
    return null
}