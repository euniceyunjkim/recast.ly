import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYoutube.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVid: exampleVideoData[0],
      videos: []
    };

    this.getYouTubeVideos('react tutorials');
  }

  getYouTubeVideos(search) {
    searchYouTube(search, (videos) =>
      this.setState({
        currentVid: videos[0],
        videos: videos,
      })
    );
  }

  onListItemClick(video) {
    this.setState({
      currentVid: video
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange= {this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickFunc={this.onListItemClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
