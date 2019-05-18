* onChange | 更改就会调用里面的函数
* onClick  | 点击就会调用里面的函数
* onSubmit

``` jsx
onChange={this.onInputChange}
/* SAME 
   上面的是call onInputChange 
   下面的是 print (里面是e 不必谢addEventLisnter)
*/
onChange={(event) => console.log(event.target.value)}
```

### React World
<p>页面的data他是去 state里面看</p>

### HTML World
<p>页面的data他是去 html DOM看</p>

``` jsx
    /*
        value该渲染什么资料呢
        就是看e 给输出的资料去更改state的地方
    */
    state = { term: ''};

     <input 
        type="text" 
        value={this.state.term} 
        onChange={e => this.setState({ term: e.target.value.toUpperCase() })} 
     />
```
 
### L84-遇到state undefined 那个是因为 this 没有东西而不是state

``` javascript
  /*
    方法一(绑定 class对象)
  */
  // 解决的方法 就是 把 method drive 指向 instance 
  constructor(){
    this.drive = this.drive.bind(this)
  }

  /*
    方法二( Arrow function )
    那样他的this 就不是指向 onFormSubmit了 而是 class
  */
  onFormSubmit = event => {
      console.log(this.state.term)
  }

  /*
    第三方法 (在called的时候就使用arrow fn) *记得要放对像
  */
  onFormSubmit(e){
  e.preventDefault();

  console.log(this.state.term)
}
// 要在挂号里写e 他才会 prevent
 onSubmit={(event) => this.onFormSubmit(event)}
```


* 这个code就是类似 react里的 undefined

``` javascript
class Car {
  constructor(){
    this.drive = this.drive.bind(this)
  }
  setSound(sound){
    this.sound = sound
  }
  
  drive(){
    return this.sound;
  }
}

const car = new Car();
car.setSound('wawawa');
const a = car.drive; //因为这个drive没有被call | 没有 ()
console.log(a())     // 在这里才被call 但是 里面的drive指向this.sound, this是谁调用它 它指向谁 但是这个a()调用它 它没this对象
```


### class 里的props要写在哪里？？

``` javascript 
class SearchBar extends React.Component {
    /*
        写this.props就好了
        如果不是class而是fn 就放在()里面啊
    */

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term)
    }
}
```