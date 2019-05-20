import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // 分解了 不然是 image.description 。。。
    const images = props.images.map((image)=> {
        // console.log(image)
        return <ImageCard key={image.id} image={image} />
    });

    return (
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList;