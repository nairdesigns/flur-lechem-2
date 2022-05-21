import React from "react";

const api =
  "https://graph.facebook.com/v13.0/102155212457926?fields=albums%7Bphotos%7Bpicture%2Clink%2Cimages%7D%7D&access_token=EAAOzsZB8oZBgoBAIfwr6yO1iaoyJDVE3eZBpZCFZC2ArK3XkZBa1bHcF7YsF6r7Oj6tqJQVXNLnN7ZAsVqVA5F35wUZBEAunyDGImoINW54cSTZB1QjHlgQeP6gqo0gV0U7JR7HZAmvi1LVhfKc6wZCsChAOU0cZCjZCTLosMR3C7p7klAnIPsHb5Tced3VgoLIpVYKV6PijcLLAkR2xB542TefcP";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(`this is the api data:`);

        console.log(data.albums.data[0].photos.data[0].images[0].source);
        this.setState({
          info: data.albums.data[0].photos.data[0].images[0].source,
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      //Here is where the data from the API should be displayed
      <div className="newmessage">
        <img src={this.state.info} />

        <p>Message:</p>
      </div>
    );
  }
}
