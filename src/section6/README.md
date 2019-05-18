* Component Life Style
1. constructor 被call
2. render > content visible on screen 过后在去 找props 更新资料(以下步骤)
3. componentDidMount > Sit and wait for updates.. 资料渲染后 会去到下面步骤
4. componentDidUpdate > Sit and wait until this component is not longer shown
5. componentWillUnmount

* Spinner.defaultProps{propName: valueDefault}
1. 设置 default props属性 