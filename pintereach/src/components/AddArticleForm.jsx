import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";

import { addArticle } from "./actions";


class AddArticleForm extends React.Component {
  state = {
    article: {
    id: "",
      url: "",
      title: "",
      image: "",
      description: "",
      board_id:"",
      user_id:""
    }
  };

  changeHandler = e => {
    this.setState({
      article: {
        ...this.state.article,
        [e.target.name]: e.target.value,
        user_id: this.props.id
      }
    });
  };

  addArticle = e => {
    e.preventDefault();
    this.props.addArticle(this.state.article);
    this.props.history.push("/home");
    this.setState({
      article: {
        title: "testing",
        link: "",
        user_id: this.props.id,
        categories_id: ""
      }
    });
  };

  render() {
    return (
      <>
        <div className="main">
          <div className="add-article-form">
            <form onSubmit={this.addArticle}>
              <h2>
               
              </h2>

              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={this.changeHandler}
                value={this.state.article.title}
                required
              />
              <input
                type="url"
                name="link"
                placeholder="Link"
                onChange={this.changeHandler}
                value={this.state.article.link}
                required
              />
              <input
                type="number"
                name="categories_id"
                placeholder="Board Id"
                onChange={this.changeHandler}
                value={this.state.article.categories_id}
                required
              />

              <button>
                {this.props.addingArticle ? (
                  <Loader
                    type="TailSpin"
                    color="red"
                    height={8}
                    width={8}
                  />
                ) : (
                  "Add Pin"
                )}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ addingArticle, id }) => ({
  addingArticle,
  id
});

export default connect(
  mapStateToProps,
  { addArticle }
)(AddArticleForm);
