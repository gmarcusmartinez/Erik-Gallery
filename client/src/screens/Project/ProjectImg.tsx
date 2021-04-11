import React from 'react';
import { s3Url } from 'api/url';

class ProjectImg extends React.Component<
  { imgUrl: string; cb: Function },
  { spans: number }
> {
  imageRef: any;

  constructor(props: any) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const gridAutoRows = 5;
    const spans = Math.ceil(height / gridAutoRows);
    this.setState({ spans });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => {
      this.setSpans();
    });
  }

  render() {
    const { imgUrl, cb } = this.props;
    const style = { gridRowEnd: `span ${this.state.spans}` };
    return (
      <div onClick={() => cb()} style={style}>
        <img
          ref={this.imageRef}
          className='project-screen__img'
          src={`${s3Url}/${imgUrl}`}
          alt='project'
        />
      </div>
    );
  }
}

export default ProjectImg;
