const TemplateExpressions = () => {
    const name = "Ramon";
    const data = {
        age: 31,
        job: "programmer",
    };

    return (
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Você atua como: {data.job}</p>
        <p>{4 + 4}</p>
        <p>{console.log("jsx React")}</p>
    
    </div>
    );
};
export default TemplateExpressions;