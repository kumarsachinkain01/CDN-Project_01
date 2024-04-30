
    const Title = () => {
        return (
        <h1>Learn Web Development</h1>
        );
    };

    const Para = () => {
        return (
        <p>Welcome to the MDN learnig area. This set of artcles aims to guide complete beginners to web development with all that they need to start codding websites.</p>
        );
    };

    const Apara = () => {
        return (
        <p>The aim of this area of MDN is not take you from "beginner" to "expert" but to take you from "beginner" to "comfortable". From there, you should ba able to start making your way, learning from <span> <a href="#">the rest of MDN</a> </span>,and other intermediate to advanced resources that assume a lot of previous knowledege.</p>
        );
    };
    const Bpara = () => {
           return (
            <p>
                If you are a complete beginner, web development can be challenging -- we will hold your hand and provide enough details for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.
            </p>
           )
    }

    const Main = () => {
        return (
            <div className="container">
         <Title/> 
         <Para/>
         <Apara/>
         <Bpara/>
        </div>
    );
    };

    
    ReactDOM.render(<Main/>, document.querySelector('#root'));