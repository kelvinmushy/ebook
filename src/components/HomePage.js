import React from 'react';
import bookcover from './../images.jpg';
// import Read from './Read';
 function HomePage() {
  return (
    <div class="container-fluid">
         <nav class="navbar navbar navbar-dark bg-primary">
     <a class="navbar-brand" href="#">Ebook</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
    </div>
     </nav>
      
        <div class="row" style={{marginTop:50}}>
            <div class="col-md-3">
              <div class="card">
              <a href ={`/read`} ><img class="card-img-top" src={bookcover} alt="yes" ></img></a>
                 <div class="card-body">
                <h5 class="card-title">Novel America</h5>
                 <p class="card-text">Example.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
            <div class="card">
              <a href ={`/read`} ><img class="card-img-top" src={bookcover} alt="yes" ></img></a>
                 <div class="card-body">
                <h5 class="card-title">Novel America</h5>
                 <p class="card-text">Example.</p>
              
                </div>
              </div>
                </div>
                <div class="col-md-3">
                <div class="card">
                   <a href ={`/read`} ><img class="card-img-top" src={bookcover} alt="yes" ></img></a>
                 <div className="card-body">
                <h5 className="card-title">Novel America</h5>
                 <p className="card-text">Example.</p>
              
                </div> 
              </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                   <a href ={`/read`} ><img class="card-img-top" src={bookcover} alt="yes" ></img></a>
                 <div className="card-body">
                <h5 className="card-title">Novel America</h5>
                 <p className="card-text">Example.</p>
              

                </div> 
                </div>
                </div>
              </div>
          
     </div> 
  );
}

export default HomePage;




