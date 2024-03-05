function Helloc(prpos){
    const [somme, setSomme] = useState(0);
    const sommeCalcule = () => {
        setSomme(somme +1);
    }

    //hookss kol haja feha manipulation 
    return (
    <div>
        Hello, {prpos.name}
        <p>La somme est : {somme}</p>
        <button onClick={sommeCalcule}>Click me</button>
    
    </div>
    
    );

}
export default Helloc;