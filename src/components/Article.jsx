// export const Article = () => ();
import React from "react";


const getDateISO = (value) => {
  console.log(value instanceof Date)
  console.log(value.toISOString())
  console.log(value.toISOString().slice(0, 10))
  return value.toISOString().slice(0, 10);
}

const getDateLocalString = (value) => {
  return value.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const Article = ({ title, date, text }) => {
  return  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={getDateISO(date)} data-cy="date">
        {getDateLocalString(date)}
      </time>
    </p>

    <p data-cy="text">{text}</p>
  </div>
}
