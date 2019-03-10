import React from 'react';
import classes from './AboutUs.module.css';
import InstaOffice from '../immages/InstaOffice.jpg';

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
    <img className={classes.img} src={InstaOffice} alt=""></img>
    <div className={classes.info}>
        <div className={classes.personalInfo}>
            <h4 className={classes.name}><strong>Алекс Въгларов</strong></h4>
            <p>Алекс Въгларов е един от създателите на Instagram! Едни от сайтовете с най-голям интерес! Той започна като кадет в IT Talentes Season X, реализирането на финалния му проект го доведе до съдружие в "кварталния гараж" - основа за всяка успешна IT компания.</p>
        </div>
        <div className={classes.personalInfo}>
            <h4 className={classes.name}><strong>Михаил Ризов</strong></h4>
            <p>Михаил Ризов е един от създателите на Instagram! Едни от сайтовете с най-голям интерес! Той започна като кадет в IT Talentes Season X, реализирането на финалния му проект го доведе до съдружие в "кварталния гараж" - основа за всяка успешна IT компания.</p>
        </div>
    </div>
</React.Fragment>)

export default aboutUs;