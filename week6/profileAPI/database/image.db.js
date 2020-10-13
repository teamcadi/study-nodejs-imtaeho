/**
 * @image {id: number, path: string, userId: number}
 */
// 이미지 더미데이터
const images = [
    {id: 1, path: "uploads/users/test@test.png", userId: 1},
]

// 이미지 하나 가져오기
const getImage = (imageId) => {
    return images.find((image)=> image.id === imageId)
} 

module.exports = {
    images,
    getImage
}