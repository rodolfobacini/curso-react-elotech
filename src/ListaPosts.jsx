import React from 'react';
import {Table} from 'reactstrap';

export class ListaPosts extends React.Component {

    renderPosts = (post) => {
        return (
            <tr key={post.post}>
                <td>{post.post}</td>
            </tr>
        )}

    render () {
        return (
            <Table striped>
                <thead>
                <tr>
                    <th>Posts</th>
                </tr>
                </thead>
                <tbody>{this.props.posts.map(this.renderPosts)}</tbody>
            </Table>
        )}
}

export default ListaPosts;
