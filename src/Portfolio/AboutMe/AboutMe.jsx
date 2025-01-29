import React from "react";
import './AboutMe.css';
import SimpleSquare from "../../CommonComponents/SimpleSquare/SimpleSquare";

function AboutMe() {
    return(
        <div className="AboutMe">
            <h1>Will Parsons</h1>
            <p>Front-end developer</p>
            <div className="DualContent">
                <div className="TextColumn">
                    <p>I'm a full stack software engineer with 5 years of experience. Recently, I had the chance to follow my heart and I moved (with my parter and our 2 cats) to London!</p>
                    <p>A bit about me... I recently relocated from Chicago to London. Currently here in London on a visa which has already granted me the right to rent and right to work. </p>
                    <p>I specialize in creating innovative solutions that drive positive change for communities and end users, blending technical expertise with a passion for social good. I am always hungry to learn more and grow in new directions that enable me to grow. My experience spans large companies, including Fortune 500 firms, as well as non-profit organizations, demonstrating my adaptability and commitment to impactful work.</p>
                </div>
                <div className="PictureColumnContainer">
                    <div className="PictureContent">
                        <img className="RoundedImage" src={`Images/Headshot_1.png`} alt="Headshot_1" height="504px" width="378px"></img>
                    </div>
                </div>
            </div>
            <p>As a programmer, I've learned quite a few languages and tools over the years that have all combined to make me the developer that I am</p>
            <div className="SquareHolderL">
                <SimpleSquare text="React" pic="react"></SimpleSquare>
                <SimpleSquare text="JavaScript" pic="javascript"></SimpleSquare>
                <SimpleSquare text="HTML" pic="html"></SimpleSquare>
                <SimpleSquare text="CSS" pic="css"></SimpleSquare>
                <SimpleSquare text="Typescript" pic="typescript"></SimpleSquare>

            </div>
            <div className="SquareHolderR">
                <SimpleSquare text="Datadog" pic="datadog"></SimpleSquare>
                <SimpleSquare text="GHA" pic="githubactions"></SimpleSquare>
                <SimpleSquare text="Tailwind" pic="tailwind"></SimpleSquare>
                <SimpleSquare text="Twilio" pic="twilio"></SimpleSquare>
                <SimpleSquare text="Angular" pic="angularjs"></SimpleSquare>
            </div>
            <div className="SquareHolderL">
                <SimpleSquare text="Python" pic="python"></SimpleSquare>
                <SimpleSquare text="Git" pic="git"></SimpleSquare>
                <SimpleSquare text="SQL" pic="sql"></SimpleSquare>
                <SimpleSquare text="Github" pic="github"></SimpleSquare>
                <SimpleSquare text="Kubernetes" pic="kubernetes"></SimpleSquare>
            </div>
            <div className="SquareHolderR">
                <SimpleSquare text="Ruby" pic="ruby"></SimpleSquare>
                <SimpleSquare text="Ruby on Rails" pic="rubyonrails"></SimpleSquare>
                <SimpleSquare text="C++" pic="cplusplus"></SimpleSquare>
                <SimpleSquare text="C#" pic="csharp"></SimpleSquare>
                <SimpleSquare text="Java" pic="java"></SimpleSquare>
            </div>

            <p>As a frontend developer, I have a lot of experience with JavaScript Packages across all parts of the ecosystem.</p>


        </div>

    )
}

export default AboutMe;