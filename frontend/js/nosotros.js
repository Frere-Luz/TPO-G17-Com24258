document.getElementById("header").innerHTML= `
  <div class="nav-container">
  <!--Colocar el logo aqui-->
  <div>
      <img class="logo" src="../assets/logoVivero.png" alt="">
  </div>
  <!-- Barra de navegacion -->
  <div class="nav-list-container">
      <ul class="list-content">
          <li><a href="index.html">Home</a></li>
          <li><a href="ofertas.html">Ofertas</a></li>
          <li><a href="comentarios.html">Comentarios</a></li>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="#">Tienda</a></li>
      </ul>
  </div>
  <!-- boton de registro/login -->
  <div class="nav-register-container">
      <a class="nav-register" href="#">Registro</a>
      <a class="nav-register" href="#">Login</a>
  </div>
  </div>
`
document.getElementById("footer").classList.add("footer-container")

document.getElementById("footer").innerHTML= `
  <!-- place footer here -->
  <div class="footer-logo-container">
      <div class="footer-logo">
          <img src="../assets/logoVivero.png" alt="">
      </div>
      <div class="footer-location">
          <p>visitenos en</p>
          <p>342 magnolia street</p>
          <p>pasadena,ca. 91105</p>
          <p>(837)8271 9811 / (918)9827 9834</p>
          <a href="#">elalegreplantinvivero.com</a>
      </div>
  </div>
  <div class="footer-redes-container">
      <div class="footer-redes">
          <a href="https://www.facebook.com"><img class="img-fb" src="../assets/logoFacebookVivero.png" alt=""></a>
          <a href="https://www.instagram.com"><img src="../assets/logoInstagramVivero.png" alt=""></a>
          <a href="https://web.whatsapp.com/"><img src="../assets/logoWhatsappVivero.png" alt=""></a>

      </div>
      <div class="footer-derechos-container">
          <img class="c-circle" src="../assets/copyrightIcon.svg" alt="">
          <p>todos los derechos reservados</p>
      </div>
  </div>
`
