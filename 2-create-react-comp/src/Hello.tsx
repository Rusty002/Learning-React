function Hello(){
    let myName = 'Abdur Rehman';

    let fullName  = () => {
        return 'Abdur Rehman Amjad'
    }
    return <h3> This is {fullName()} speaking from future. </h3>;
}

export default Hello;