const listHelper = require('../utils/list_helper')


describe('total likes', () => {
    
    const blog1 = [
        {
          _id: "5a422a851b54a676234d17f7",
          title: "React patterns",
          author: "Michael Chan",
          url: "https://reactpatterns.com/",
          likes: 7,
          __v: 0
        }
    ]

    test('when list has only 1 blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(blog1)
        expect(result).toBe(7)
    })
})