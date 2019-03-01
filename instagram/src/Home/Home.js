import ArticleContainer from '../common/UI/ArticleContainer/ArticleContainer';
import Post from '../common/UI/Post/Post';

const home = props => {
(<React.Fragment>
    <ArticleContainer />
    <Post props={this.props.users[0].posts[0]} />
</React.Fragment>);
}

export default home;