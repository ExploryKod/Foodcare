exports.phoneDeformat = (phone) => {
    const arr = phone.split('')
    const removeWhiteSpace = arr.filter((str) => {
        return /\S/.test(str);
    })
    const phoneConcat = removeWhiteSpace.join('')
    return phoneConcat 
}

exports.phoneFormat = (phone) => {
        const string = phone.toString()
        const format = string.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
        const result = [format.slice(0, 2), " ", format.slice(2,4), " ",format.slice(4,6), " ", format.slice(6,8), " ", format.slice(8,10)].join('');
        return result;
   
}