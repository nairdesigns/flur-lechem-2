import React from "react";

const api =
  "https://graph.facebook.com/v13.0/102155212457926?fields=albums%7Bphotos%7Bpicture%2Clink%2Cimages%7D%7D&access_token=EAAOzsZB8oZBgoBAINxyZCNPifXs0X6FjraUDsqV9Am6BH6JUf7vp4ri7MRYN4QpmXg56Xo2HSOjgZBF0wMAYf5qQNrXUH5c1OuDWGsRh5cZBHhabQCbovcdDEQDIejxJX1DnPUbWI2DbovwKYZAAZCUxwDm8LWuH7OctqIfjWW7GwZDZD";

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
          picture1: data.albums.data[0].photos.data[0].images[0].source,
          picture2: data.albums.data[0].photos.data[1].images[0].source,
          picture3: data.albums.data[0].photos.data[2].images[0].source,
          picture4: data.albums.data[0].photos.data[3].images[0].source,
          picture5: data.albums.data[0].photos.data[4].images[0].source,
        });
      });
  }

  render() {
    console.log(this.state.pictureOne);

    return (
      //Here is where the data from the API should be displayed
      <>
        <div className="newmessage">
          <img src={this.state.picture1} />
          <img src={this.state.picture2} />
          <img src={this.state.picture3} />
          <img src={this.state.picture4} />
          <img src={this.state.picture5} />

          <p>Message:</p>
        </div>
      </>
    );
  }
}
