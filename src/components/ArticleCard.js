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
    ]
  const getDate = inputDate => {
    let actualDate = new Date(inputDate);
    let daySuffix = "th"
    if(actualDate.getDay() === 1) daySuffix = "st"
    else if(actualDate.getDay() === 2) daySuffix = "nd"
    else if(actualDate.getDay() === 3) daySuffix = "rd"
    //debugger
    return `${months[actualDate.getUTCMonth()]} ${actualDate.getDay() + daySuffix}, ${actualDate.getFullYear()}`;
  };

  return (
    <div
      className={(props.main ? "article-card main" : "article-card grid-element") + " drop-shadow"}
    >
      <div
        className="content-wrapper"
        style={{
          backgroundImage: `url(${props.article.img})`
        }}
      >
        <h2>{props.article.title ? props.article.title : "Article Title"}</h2>
        <p>
            <span> {props.article.author ? props.article.author : "Author"}</span>
          <span className="space" />
            <span>          {props.article.created_at
            ? getDate(props.article.created_at)
            : "01/01/1970"}</span>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
