import React from "react";
const ArticleCard = props => {
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const toTitleCase = str => {
    const words = str
      .toLowerCase()
      .split(" ")
      .map(word => {
        if (word === "a" || word === "if" || word === "an") return word + " ";
        const char = word.charAt(0).toUpperCase();
        return (char + word.slice(1)).toString() + " ";
      });
    return words
  };

  return (
    <div
      className={
        (props.main ? "article-card main" : "article-card grid-element") +
        " drop-shadow"
      }
    >
      <div
        className="content-wrapper"
        style={{
          backgroundImage: `url(${props.article.img})`
        }}
      >
        <h2>
          {props.article.title
            ? toTitleCase(props.article.title)
            : "Article Title"}
        </h2>
        <p>
          <span>{props.article.author ? props.article.author : "Author"}</span>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
