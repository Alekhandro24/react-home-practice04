import { Component } from 'react';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default class SignupForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form style={styles.form} autoComplete="off">
        <label style={styles.label}>
          <span>Почта</span>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>

        <label style={styles.label}>
          <span>Пароль</span>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    );
  }
}
