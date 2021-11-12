import img from './error.gif';

const ErrorMessage = () => {
    return (
        //<img src={process.env.PUBLIC_URL + '/error.gif'}/> //-обращение через такую кострукцию к файлу в папке PUBLIC
        <img src={img} alt='error gif' style={{display: 'block', width:'250px', height:'250px', objectFit:'contain', margin:'0 auto'}}/>
    )
}

export default ErrorMessage