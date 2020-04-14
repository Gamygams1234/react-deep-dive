import React, { Component } from "react";

const rawJournalData = [
  {
    title: "Post One",
    content: "Post Content",
    status: "draft",
  },
  {
    title: "Post Two",
    content: "Post Content",
    status: "draft",
  },
  {
    title: "Post Three",
    content: "Post Content",
    status: "draft",
  },
  {
    title: "Post Four",
    content: "Post Content",
    status: "draft",
  },
];

// class component
export default class JournalList extends Component {
  constructor(props) {
    super();
    this.state = {
      journalData: rawJournalData,
      greeting: "Hi There Gamy",
      isOpen: true,
    };
  }
  render() {
    // we were able to take the heading from our props
    return (
      <div>
        <h2>{this.props.heading}</h2>
      </div>
    );
  }
}
