import React, {Component} from 'react';
// Field component is a React component which is wired up with redux form.
// reduxForm is a function is very similar to the connect helper that we have been using
// with react Redux. It allows our component to talk directly to the redux store.
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

class PostsNew extends Component {
  // Conventional field object parameter contains some event handlers we need to wire up to the JSX.
  renderField(field) {
    // Destructoring is not touched: touched
    const {
      meta: {
        touched,
        error
      }
    } = field;

    const className = `form-group ${touched && error
      ? 'has-danger'
      : ''}`;

    return (<div className={className}>
      {/* // The field component does not recognize magically the input tag. */}
      {/* We use the notation below to make that connection. */}
      {/* ... dots help us to get all the properties needed in field.input without writing
        each props such as field.input.onChange; */
      }

      <label>{field.label}</label>
      <input className="form-control" type="text" {...field.input}/> {/* // This meta property is automatically added to the field object from
      our validate function. */
      }
      {/* Touched already managed by Redux Form */}
      <span className="label label-danger">
        {
          touched
            ? error
            : ''
        }
      </span>
    </div>);
  }

  onSubmit(values) {
    // this === component
    console.log(values);
  }

  render() {
    // When we wired up Redux Form like you would do with react
    // we connected tons of properties as well... like this one.
    const {handleSubmit} = this.props;

    // Redux Form is responsible only for the state and validation of our form.
    // We are using bind as we are going to use onSubmit function outside this component (not clear).
    return (<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      {/* // Field is only in charge to communicate with Redux Form. The React component associate will have to render
      the field properly. */
      }
      {/* We do not write this.renderTitleField() as Redux Form decides when to call the function automatically. */}
      <Field label="Title" name="title" component={this.renderField}/>
      <Field label="Category" name="categories" component={this.renderField}/>
      <Field label="Content" name="content" component={this.renderField}/>

      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/" className="btn btn-danger">Cancel</Link>
    </form>);
  }
}

// Validate will be called automatically by Redux Form when needed.
function validate(values) {
  // console.log(values); -> { title: 'Ciao', categories: 'lol', content: 'Amblimble' }
  const errors = {};
  // IMPORTANT: the names of this object attributes are strictly connected to the name's properties of each Field component.
  // Furthermore Field will look for any error with the same name of the field itself.
  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter at least a category!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  // If errors has any properties then the submit won`t be performed.
  return errors;
}

export default reduxForm({
  validate,
  // We intend 'form' as name of the form. You may want to show multiple forms on a single page.
  form: 'PostsNewForm'
})(PostsNew);

// if you create another component e.g. posts-edit.js the reduxForm would merge together.
// export default reduxForm({
//   form: 'PostsEditForm'
// })(PostsEdit);
