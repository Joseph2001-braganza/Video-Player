import React from 'react';

const Footers= () => {
  return (
   <>
   <footer className="page-footer font-small blue pt-4 bg-dark mt-5">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 text-white">
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-white">© 2022 Copyright:
        <a className="text-decoration-none" href="https://VideoPlayer.com/" > VideoPlayer.com</a>
    </div>

</footer>
   </>
  );
};

export default Footers;