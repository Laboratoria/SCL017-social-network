export default () => {
  const landingView = `

        <main class="main-content"> 
            
              <nav id="navbar">
                <a href="#/login" id="login" class="button" >Ingresar</a>
                <a href="#/register" id="register" class="button" >Registrarse</a>
                <!-- <a href="#/post" id="post" class="button" >POST</a> -->
              </nav>

              <div class="title-students">
                  <img id="symbol-1" class="logo" src="./css/img_app/chevronLS.png" alt="logo">
                  <h1 class="students"> <span class="chevron left"></span> Laboratoria Students<span
                      class="chevron right"></span> </h1>
                  <h2 class="title-two">Una red para todas</h2>
              </div>
              <div id="landing-img">
                <section id="img-background"></section>
              </div>
                
              <div id="slider">
                  <figure> 
                      <div class="figure-div"> <div class="green-circle"><h2 class="text-circle">Matched</h2> </div> </div>
                      <div class="figure-div"> <div class="green-circle"><h2 class="text-circle">Memes</h2> </div> </div>
                      <div class="figure-div"> <div class="green-circle"><h2 class="text-circle">Ayuda Técnica</h2> </div> </div>
                      <div class="figure-div"> <div class="green-circle"><h2 class="text-circle">Cuadro cuatro</h2> </div> </div>
                      <div class="figure-div"> <div class="green-circle"><h2 class="text-circle">Cuadro cinco</h2> </div> </div>
                  </figure>
              </div>
             </main>
        `;

  const landingElement = document.createElement('section');
  landingElement.id = 'landing-section';
  landingElement.innerHTML = landingView;

  return landingElement;
};
