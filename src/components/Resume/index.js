import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Резюме</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Вячеслав Килин</h2>
          <ul>
            <li>
              Основные компетенции в управлении корпоративным контентом, комплексной веб-разработке, архитектуре данных и управлении интеграциями.
            </li>
          </ul>
          <a
            href="https://github.com/fondofhats/react-portfolio/raw/main/docs/MichaelGiddingsResume.docx"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Мои знания</h2>
          <ul>
            <li>
             React, JavaScript, TypeScript, Redux, ES6, Axios, Material UI, Fetch, Firebase
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
