// Fragment 是一种占位符形式，类似于 Vue 的 Template
import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  // 构造函数
  constructor(props) {
    super(props);
    // 定义数据
    this.state = {
      inputValue: '',
      list: []
    }
  }

  // 渲染页面
  render() {
    let closeStyle = {
      fontSize: '1.2em',
      color: 'deepskyblue'
    }
    return (
      <Fragment>
        <div>
          {/* 单项数据绑定 */}
          {/* 在 React 中，绑定时间的，一般为半驼峰形式 */}
          <input 
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map( (item, index) => {
              return <li key={index}>
                <span>{index} - {item}</span>
                <span style={closeStyle} onClick={this.handleItemDelete.bind(this, index)}>×</span>
              </li>
            })
          }
        </ul>
      </Fragment>
    )
  }

  // 方法体 - 输入内容
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 方法体 - 点击提交
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  // 方法体 - 删除项目
  handleItemDelete(index) {
    // immutable - state 不允许做任何改变
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    })
  }

}

export default TodoList;