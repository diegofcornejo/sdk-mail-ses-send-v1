<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
![License](https://img.shields.io/github/license/diegofcornejo/lambda-github-actions?style=for-the-badge)
![Build](https://img.shields.io/github/workflow/status/diegofcornejo/lambda-github-actions/Deploy/master?style=for-the-badge)
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ![Alt](https://repobeats.axiom.co/api/embed/cba41cff11950e90521f7f67990dba6cb3743f6b.svg "Repobeats analytics image") -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/diegofcornejo/lambda-github-actions">
    <img src="https://miro.medium.com/max/2000/1*bxhEFjJ4J2CI5sfFsuP7fg.jpeg" alt="Logo" width="auto" height="80">
  </a>

  <h3 align="center">Lambda Github Actions</h3>

  <p align="center">
    Deploy AWS lambda functions using CI/CD github actions
    <br />
    <a href="https://github.com/diegofcornejo/lambda-github-actions"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/diegofcornejo/lambda-github-actions">View Demo</a>
    ·
    <a href="https://github.com/diegofcornejo/lambda-github-actions/issues">Report Bug</a>
    ·
    <a href="https://github.com/diegofcornejo/lambda-github-actions/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Tiempo atrás desarrollé una serie de micro servicios comunes que nuestro equipo usaba constantemente, el motivo de desarrollarlos fue unificar y acelerar el desarrollo de ciertas funcionalidades, ya que en cada proyecto, cada equipo y cada desarrollador implementaban de diferente forma estos servicios, por ejemplo:

- Authentication & Authorization with local db, cognito, auth0, etc
- Password reset
- Send email with AWS SES or other vendors
- Create short links
- Store email events
- Send SMS  with AWS SNS or Regional Telcos
- Generate PDF
- Upload & Download files from AWS S3
- DNS Validation
- SSL Certs generation
- And other stuff

Pero eso no es un problema, si se resolvió un problema común de muchos equipos multiproyectos.

Inicialmente no es un problema, pero sí, lo hay: Mantenimiento!, todo los servicios que escribí los hice directamente en AWS Lambda, nadie más del equipo sabía donde estaban, y cada vez que se necesitaba hacer un cambio o validar alguno de los servicios necesitaban de mi participación.

Esto en ocaciones por mis actividades normales retrasaba ciertas tareas o finalmente el equipo optaba por crear sus propios servicios inutilizando el concepto de homologación que estaba tratando de implementar.

Básicamente por esta razón decidimos descargar todos estos micro servicios en repositorios git independientes y otorgar accesos granulares a los miembros del equipo para que puedan seguir aportando sobre los servicios o crear nuevos, ya que la mayoría de los miembros del equipo no tienen acceso directo a AWS y para agilizar el deploy de las actualizaciones y nuevos servicios creé este pequeño tutorial de como hacer autodeploy de funciones lambda usando github actions.

****NO HE TENIDO TIEMPO DE TERMINAR LA DOCU****

<!-- [![Product Name Screen Shot][product-screenshot]](https://diegocornejo.com) -->


### Built With

* []()
* []()
* []()



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Create github secrets
  ```sh
  AWS_ACCESS_KEY_ID
  AWS_SECRET_ACCESS_KEY
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/diegofcornejo/lambda-github-actions.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://diegocornejo.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/diegofcornejo/lambda-github-actions/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Diego Cornejo - [@diegofcornejo](https://twitter.com/diegofcornejo) - diegof.cornejo@gmail.com

Project Link: [https://github.com/diegofcornejo/lambda-github-actions](https://github.com/diegofcornejo/lambda-github-actions)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()
* []()
* []()





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/diegofcornejo/lambda-github-actions.svg?style=for-the-badge
[contributors-url]: https://github.com/diegofcornejo/lambda-github-actions/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/diegofcornejo/lambda-github-actions.svg?style=for-the-badge
[forks-url]: https://github.com/diegofcornejo/lambda-github-actions/network/members
[stars-shield]: https://img.shields.io/github/stars/diegofcornejo/lambda-github-actions.svg?style=for-the-badge
[stars-url]: https://github.com/diegofcornejo/lambda-github-actions/stargazers
[issues-shield]: https://img.shields.io/github/issues/diegofcornejo/lambda-github-actions.svg?style=for-the-badge
[issues-url]: https://github.com/diegofcornejo/lambda-github-actions/issues
[license-shield]: https://img.shields.io/github/license/diegofcornejo/lambda-github-actions.svg?style=for-the-badge
[license-url]: https://github.com/diegofcornejo/lambda-github-actions/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/diego-f-cornejo-4154126a
<!-- [product-screenshot]: images/screenshot.png -->
