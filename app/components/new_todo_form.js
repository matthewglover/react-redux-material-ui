import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import autoBind from '../lib/auto_bind';

const style = {
  width: '100%',
};

class NewTodoForm extends Component {

  // NOTE: https://discuss.reactjs.org/t/should-we-include-the-props-parameter-to-class-constructors-when-declaring-components-using-es6-classes/2781
  constructor(props) {
    super();
    autoBind(this);
    this.state = { value: props.value };
  }

  onChange(evt) {
    this.setState({ value: evt.target.value });
  }

  onSubmit(evt) {
    evt.preventDefault();

    if (!this.state.value.trim()) return;

    this.props.onSubmit(this.state.value.trim());
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={style}>
        <TextField
          id="newTodo"
          hintText="Add todo"
          value={this.state.value}
          onChange={this.onChange}
          style={{ width: '100%' }}
        />
      </form>
    );
  }
}

NewTodoForm.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default NewTodoForm;
