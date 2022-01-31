import React from 'react';

function About() {

    return (
        <section className="container">
            <h2 class="top-title">Немного обо мне . . . </h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="Вячеслав Килин" />
                <p>
                    "Скажи мне — и я забуду, покажи мне — и я запомню, дай мне сделать — и я пойму."
                    Я самоучка, набираюсь знаниями и опытом из книг и курсов.Нравится всё что связано с фронтенд разработкой,
                    что можно самостоятельно создавать крутые вещи которыми будут пользоваться другие люди.
                    Буду рад войти в сферу разработки под крутым менторством и в сильную, интересную команду.
                </p>
                <p>
                    Очень горю программированием, хочу и дальше этим заниматься в команде с умными людьми чтобы можно было перенять от них чтото новое и интересное
                </p>
            </div>
        </section>
    )
}

export default About;