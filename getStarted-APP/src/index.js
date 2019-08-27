import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={
//           () => this.props.onClick()
//         }
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

const Square = (props) => {
  return (
    <button
      className='square'
      // 函数式组件可以这么写↓ 前后都没括号 函数式里没this
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}



class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }


  render() {
    return (
      <div>
        {
          Array(3).fill(null).map((itemx, x) => (
            <div className="board-row" key={x}>
              {
                Array(3).fill(null).map((itemy, y) => (
                  this.renderSquare(3 * x + y)
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          player: '',
          position: [],
        }
      ],
      XisNext: true,
      currentStep: 0,
      sort: true,
    }
  }

  gameStatus() {
    const his = this.state.history;
    const current = his[this.state.currentStep];
    const winner = this.calculateWinner(current.squares);
    let status;
    if (winner) {
      status = `Winner is ${winner} !`
    } else {
      status = `Next player is ${this.state.XisNext ? 'X' : 'O'}`;
    }
    return status
  }

  handleClick=(i)=> {
    const his = this.state.history.slice(0, this.state.currentStep + 1)
    const len = his.length
    const current = his[len - 1]
    const squares = [...current.squares]
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    const who = this.state.XisNext ? 'X' : 'O';
    squares[i] = who

    this.setState((state)=>({
      history: [...his, {
        squares: squares,
        player: who,
        position: [Math.ceil((i + 1) / 3), (i % 3) + 1]
      }],
      XisNext: !state.XisNext,
      currentStep: len,
    }))
    // this.hightLightCurrentStep(his.length)
  }


  jumpTo(step) {
    this.setState({
      XisNext: (step % 2) === 0,
      currentStep: step
    })
    // this.hightLightCurrentStep(step)
  }

  sort(){
    this.setState((state)=>({
      sort:!this.state.sort
    }))
  }

  hightLightCurrentStep(i) {
    const list = document.getElementsByTagName('li')
    const len = list.length
    for (let i = 0; i < len; i++) {
      list[i]['className'] = ' '
    }
    if (i < len) {
      if (this.state.sort) {
        list[i]['className'] += ' bold-font'
      } else {
        list[len - 1 - i]['className'] += ' bold-font'
      }
    }
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    const lis=document.getElementsByClassName('square')
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] & squares[a] === squares[c]) {
        console.log(lis)
        for(let idx of lines[i]){
          // console.log(idx)
          lis[idx]['className']+=' highlight'
        }
        return squares[a]
      }
    }
    for(let itm of lis){
      itm['className']='square'
    }
    return null
  }
  

  componentDidUpdate() {
    this.hightLightCurrentStep(this.state.currentStep)
  }

  render() {
    const his = this.state.history;
    const current = his[this.state.currentStep];
    const moves = his.map((move, step) => {
      const desc = step ?
        'STEP #' + step :
        '　　START *';
      return (
        <li key={step}>
          <button onClick={() => this.jumpTo(step)}>{`${desc}　${move.position}　${move.player}`}</button>
        </li>
      );
    })

/**
 * Class里面的方法默认不绑定this
 * 
 * 一般来说JSX直接 ()=>this.somefunc() 就可以确保绑定this
 * 但是作为prop传入子组件时这些组件可能会重新渲染,
 * 可用 class fields语法 ↓ 来避免性能问题或者在constructor手动绑
 * 参照↓ this.handleClick
 */
    return (
      <div className="game">
        <div className="game-board">
          <Board
            onClick={this.handleClick}
            squares={current.squares}
          />
        </div>
        <div className="game-info">
          <div>{this.gameStatus()}</div>
          <button
            onClick={()=>{this.sort()}}
          >
            {this.state.sort ? '　倒序　' : '　顺序　'}
          </button>
          <ol>{this.state.sort ? moves : moves.reverse()}</ol>
        </div>
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

