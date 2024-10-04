const WelcomeMsg = ({ onGetPostsClick }) => {
  return <center className="welcomeMsg">  
          <h1>There are no posts.</h1>
          <button type="button"
          onClick={onGetPostsClick}
          className="btn btn-primary">Get post from server</button>
        </center>
}

export default WelcomeMsg;