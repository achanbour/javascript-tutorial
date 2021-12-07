'use strict';

async function fetchStarredRepos(lang = 'all') {
    const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`);

    try {
        const response = await fetch(encodedURI);

        if (response.status === 200) {
            const data = await response.json();
            return data.items;
        } else {
            throw new Error(response.status.toString());
        }
    } catch (e) {
        console.warn(e.toString());
        return [];
    }
}

// Stateless functional component
function Nav(props) {
    const langs = ['all', 'javascript', 'ruby', 'python'];

    const handleSelectClick = (e, lang) => {
        props.onSelectLang(lang);
        e.preventDefault();
    };

    return (
        <ul>
            {
                langs.map((lang, index) => (
                    <li key={index}>
                        <a href="#" onClick={(e) => handleSelectClick(e, lang)}>{lang}</a>
                    </li>
                ))
            }
        </ul>
    );
}

// Stateless functional component
function RepoGrid(props) {
    if (props.repos.length === 0) {
        return (
            <p>No results</p>
        );
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                props.repos.map((repo, index) => {
                    const { name, owner: { login }, stargazers_count, html_url } = repo;

                    return (
                        <div key={index} style={{ margin: 30 }}>
                            <ul>
                                <li><a href={html_url}>{name}</a></li>
                                <li>@{login}</li>
                                <li>{stargazers_count} stars</li>
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    );
}

class App extends React.Component {
    // Used to enforce default values for props
    static defaultProps = {};

    // Used to enforce required types for props
    static propTypes = {};

    // Set the state as a public field
    state = {
        repos: [],
        lang: 'all',
        isLoaded: false,
    };

    constructor(props) {
        console.log('--constructor--');

        // Initializing props
        super(props);

        // Bindings
        this.handleSelectLang = this.handleSelectLang.bind(this);
    }

    // Lifecycle method called immediately before each render call
    static getDerivedStateFromProps(props, state) {
        console.log('--getDerivedStateFromProps--');

        return null;
    }

    // Lifecycle method called when the component has been mounted to the actual DOM after the render call
    componentDidMount() {
        console.log('--componentDidMount--');

        fetchStarredRepos(this.state.lang).then((fetchedRepos) => {
            this.setState({
                repos: fetchedRepos,
                isLoaded: true,
            });
        });
    }

    // Lifecycle method called immediately after each render call
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('--componentDidUpdate--');

        if (this.state.lang !== prevState.lang) {
            fetchStarredRepos(this.state.lang).then((fetchedRepos) => {
                this.setState({
                    repos: fetchedRepos,
                    isLoaded: true,
                });
            });
        }
    }

    // Lifecycle method called when the component is unmounted from the actual DOM and before the render call
    componentWillUnmount() {
        console.log('--componentWillUnmount--');
    }

    handleSelectLang(currentLang) {
        this.setState({
            lang: currentLang,
            isLoaded: false,
        });
    }

    render() {
        console.log('--render--');

        // The fat arrow syntax preserves the current context and this remains accessible
        const getPageContent = () => {
            if (this.state.isLoaded) {
                return (
                    <RepoGrid repos={this.state.repos} />
                );
            }
            return (
                <p>Loading... <i className="fa fa-spinner fa-pulse" /></p>
            );
        };

        return (
            <>
                <Nav onSelectLang={this.handleSelectLang} />
                <h1 style={{ textAlign: 'center' }}>{this.state.lang}</h1>
                {getPageContent()}
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app'),
);
