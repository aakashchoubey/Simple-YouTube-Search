import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        console.log();
        return (
            <div className={"search-bar " + (this.props.darkTheme?"dark":"light")}>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearch(term);
    }
}

export default SearchBar;