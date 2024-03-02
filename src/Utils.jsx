export function GetImageUrl(imageId, size = 's') {
    const imageUrl = 
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
      console.log('Image URL:', imageUrl)
      return (
        imageUrl
    );
    


}
