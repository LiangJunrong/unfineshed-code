// Fragment 是一种占位符形式，类似于 Vue 的 Template
import React, { Component, Fragment } from 'react';

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input type="text" />
          <button>提交</button>
        </div>
        <ul>
          <li>吃饭</li>
          <li>睡觉</li>
          <li>打豆豆</li>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;