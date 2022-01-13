const Info = () => {
  return (
    <div div className="info-container">
      <div className="img-container"></div>
      <div className="info">
        <h1 className="name">Ashish Devkota</h1>
        <h4 className="designation">Frontend Developer</h4>
        <p className="email">ashishdevkota03@gmail.com</p>
        <div className="btns">
          <button className="btn email-btn">
            <i class="far fa-envelope"></i> Email
          </button>
          <button className="btn linkedin">
            <i class="fab fa-linkedin"></i> LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
