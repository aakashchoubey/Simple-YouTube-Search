import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCnu7PIOOLeYTcU2m-UWVKXVnNkp0O2yZE';

const ToggleTheme = ({darkTheme, onClick}) => {
    if(darkTheme) {
        $("body").css("background", "#222");
        /*$("body::-webkit-scrollbar-track").css({
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
            "border-radius": "10px",
            "background-color": "#333"
        });
        $("body::-webkit-scrollbar").css({
            "width": "12px",
            "background-color": "#333"
        });
        $("body::-webkit-scrollbar-thumb").css({
            "border-radius": "10px",
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
            "background-color": "#151515"
        });*/
        return <button onClick={onClick} type="button" className="theme-toggler btn btn-dark">Dark</button>;
    }
    else {
        $("body").css("background", "#fff");
        return <button onClick={onClick} type="button" className="theme-toggler btn btn-light">Light</button>;
    }
};

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {videos: [], selected: null, darkTheme: false};
        this.videoSearch('Something Just Like This');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // console.log(videos);
            // this.setState({videos});
            // equivalent to this.setState({videos: videos});
            this.setState({
                videos : videos,
                selected: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);

        return (
            <div>
                <div className="row">
                    <div className="col-md-2" style={{margin: "20px auto"}}>
                        <ToggleTheme
                            darkTheme={this.state.darkTheme}
                            onClick={event => this.setState({darkTheme: !this.state.darkTheme})}
                        />
                    </div>
                    <div className="col-md-10">
                        <SearchBar
                            onSearch={videoSearch}
                            darkTheme={this.state.darkTheme}
                        />
                    </div>
                </div>
                <div className="row">
                    <VideoDetail
                        video={this.state.selected}
                        darkTheme={this.state.darkTheme}
                    />
                    <VideoList
                        onVideoSelect={selected => this.setState({selected})}
                        videos={this.state.videos}
                        darkTheme={this.state.darkTheme}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));