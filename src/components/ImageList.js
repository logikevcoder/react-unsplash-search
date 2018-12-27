import React from 'react'

const ImageList = (props) => {
  const imageList = props.images.map(({description, id, urls}) => {
    return <img key={id} src={urls.regular} alt={description} />
  });

  return (
    <div>
      {imageList}
    </div>
  )
}

export default ImageList
