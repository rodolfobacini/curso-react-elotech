import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  
} from "reactstrap";
import { ListaPosts } from "./ListaPosts";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
      posts: []
    };
  }

  onChange = name => {
    return event => {
      const value = event && event.target ? event.target.value : event;
      this.setState({ [name]: value });
    };
  };

  handleAddPost = () => {
    const newPost = {
      post: this.state.post
    };

    this.setState(state => {
      const newposts = [...state.posts, newPost];
      
      return {
        posts: newposts,
        post: ""
      };
    });
  };

  render() {
    return (
        <Container>
          <div className="mt-2">
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input
                  type="textarea"
                  name="postar"
                  id="postar"
                  placeholder="Digite o post"
                  value={this.state.post}
                  onChange={this.onChange("post")}
                  autoFocus
                />
              </FormGroup>
              <Button
                outline
                type="button"
                color="success"
                onClick={this.handleAddPost}
              >
                Adicionar
              </Button>
            </Form>
          </div>
          <div className="mt-5">
            <ListaPosts className="mt-xs" posts={this.state.posts} />
          </div>
        </Container>
    );
  }
}
