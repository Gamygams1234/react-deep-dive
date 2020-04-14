import React, { Component } from "react";
import { JournalEntry } from "./journal_entry";

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
    content: "The walls of Jericho",
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
  toggleStatus = () => {
    if (this.state.isOpen) {
      this.setState({
        journalData: [],
        isOpen: false,
      });
    } else {
      this.setState({
        journalData: rawJournalData,
        isOpen: true,
      });
    }
  };

  // Here are two functions that set the state in our app
  //   clearEntries = () => {
  //     this.setState({
  //       journalData: [],
  //       isOpen: false,
  //     });
  //   };
  //   showAllEntries = () => {
  //     this.setState({
  //       journalData: rawJournalData,
  //       isOpen: true,
  //     });
  //   };
  render() {
    const journalEntries = this.state.journalData.map((enrty) => {
      return (
        <div key={enrty.title}>
          <JournalEntry title={enrty.title} content={enrty.content} />
        </div>
      );
    });
    // we were able to take the heading from our props
    return (
      <div>
        <h2>{this.props.heading}</h2>
        {journalEntries}

        <button onClick={this.toggleStatus}>Toggle Journal Entrires</button>
      </div>
    );
  }
}
