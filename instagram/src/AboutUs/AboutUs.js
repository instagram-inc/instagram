import React from 'react';
import classes from './AboutUs.module.css';

const aboutUs = () => 
(<React.Fragment>
    <h1 className={classes.title}>
        <strong>
            <span className={classes.letter1}>A</span>
            <span className={classes.letter2}>B</span>
            <span className={classes.letter3}>O</span>
            <span className={classes.letter4}>U</span>
            <span className={classes.letter5}>T</span><span>&nbsp;</span>
            <span className={classes.letter6}>A</span>
            <span className={classes.letter7}>S</span>
        </strong>
    </h1>
    <img className={classes.img} src="https://biint.ru/upload/medialibrary/197/197438ae10e51f96c811c16cb9e94588.jpg" alt=""></img>
    <div className={classes.info}>
        <div className={classes.personalInfo}>
            <h4 className={classes.name}><strong>Михаил Ризов</strong></h4>
            <p>Това е Мишо, той много харесва този сайт, той би го използвал всеки ден! Това е Мишо, той много харесва този сайт, той би го използвал всеки ден!</p>
        </div>
        <div className={classes.personalInfo}>
            <h4 className={classes.name}><strong>Алекс Въгларов</strong></h4>
            <p>Това е Алекс, той много харесва този сайт, той би го използвал всеки ден! Това е Алекс, той много харесва този сайт, той би го използвал всеки ден!</p>
        </div>
    </div>
</React.Fragment>)

export default aboutUs;