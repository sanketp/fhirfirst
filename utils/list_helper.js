const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    var sum = 0
    for(var i = 0; i < blogs.length; i++){
        sum += blogs[i].likes
    }
    return sum
}

module.exports = {
    dummy,
    totalLikes
}