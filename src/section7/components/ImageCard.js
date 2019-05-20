import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = { spans: 0}
        // 这个method是 为了抓对象dom的资料
        this.imageRef = React.createRef();
    }

    componentDidMount(){
/**
 * console.log(this.imageRef) 可以看到他里面的dom资料 但是
 * console.log(this.imageRef.current.clientHeight) 它print出来而且 0
 * 因为 还没收到 那个资料 第一个console.log 它print出来了 但是 当点击进去 它才去抓目标的资料
 * 所以 第二个 他会显示出 是 0， 他还没抓资料
*/

        // 需要load后 才 执行 不然 他还没拿到img资料就渲染出去了
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        // 算法是 高度 / 10 > ceil 在 ++
        const spans = Math.ceil(height / 10) + 1;
        
        this.setState({ spans: spans})
    }

    render(){
        const { description, urls } = this.props.image;
        return (
            // css 里 一个 row 才 10px 所以 这个 span 是 5的话 就是 span 5
            <div style={{ gridRowEnd: `span ${this.state.spans }`}}>
                <img
                  ref={this.imageRef}
                  alt={description} 
                  src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;