import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    console.log(this.props);
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlog.edges');

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Bio />
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path;
            return (
              <div>
                <h3
                  key={post.node.slug}
                  style={{
                    marginBottom: rhythm(1 / 4)
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={post.node.slug}>
                    {post.node.title}
                  </Link>
                </h3>
                <small>{post.node.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.node.content.childMarkdownRemark.excerpt
                  }}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
BlogIndex.propTypes = {
  route: React.PropTypes.object
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlog(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
