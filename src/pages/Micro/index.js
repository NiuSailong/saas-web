import React from 'react';
import { MicroAppWithMemoHistory } from 'umi';
import {
  initGlobalState,
} from 'qiankun';

export default class Micro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalState: {
        name: '张三'
      }
    };
  }

  componentDidMount () {
    this.actions = initGlobalState({ type: '', data: '' });
  }

  render() {
    return (
      <MicroAppWithMemoHistory
        name={'configure'}
        url={'/home'}
        globalState={this.state.globalState}
      />
    );
  }
}
