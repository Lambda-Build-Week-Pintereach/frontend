import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";

import { addArticle } from "./actions";


class AddArticleForm extends React.Component {
  state = {
    article: {
      title: "",
      cover_page: "whatever a coverpage is",
      link: "",
      user_id: "",
      categories_id: ""
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
      study: {
        title: "testing",
        cover_page: "whatever a coverpage is",
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
                    color="white"
                    height={18}
                    width={18}
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
